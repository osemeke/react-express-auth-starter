require("dotenv").config();
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const db = require('./dbconfig');
const { rules, validate } = require('./middlewares/validate-user.js');
const authorize = require('./middlewares/authorization.js');

const app = express()
const port = 3001

app.use(express.json());


app.use(cors());
// app.options('*', cors()) // include before other routes
var corsOptions = {
    origin: "http://localhost:8081"
};
  
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// ENDPOINTS

// USERS CRUD

app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (error, result) => {
        if (error) {
            res.send('error to fetch student all records')
        } else {
            res.send(result)
        }
    })
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM user WHERE id =' + id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM user WHERE id =' + id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});

app.post('/users/create', (req, res) => {
    const data = req.body;
    db.query('INSERT INTO user SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.put('/users/:id', (req, res) => {
    const data = [req.body.firstname, req.body.lastname, req.body.roll_number, req.params.id];
    db.query('UPDATE student SET firstname = ?, lastname = ?, roll_number = ? WHERE id = ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
});

app.patch('/users/:id', (req, res) => {
    const data = [req.body.firstname, req.body.lastname, req.body.roll_number, req.params.id];
    db.query('UPDATE student SET firstname = ?, lastname = ?, roll_number = ? WHERE id = ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
});

// AUTH

// auth methods

let refreshTokens = [];

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, "mySecretKey", {
        expiresIn: "165s",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, "myRefreshSecretKey");
};

const updateRefreshToken = (user, token) => {
    const data = [token,user.username];
    db.query('UPDATE user SET refresh_token = ? WHERE email = ?', data, (error, result, fields) => {
        if (error) throw error;
    })
};

const getUser = async (token) => {
    await db.query('SELECT * FROM user WHERE refresh_token = ?', token, (error, result) => {
        if (error) throw error;
        console.log(result)
        return result.length == 0 ? 0 : { username: result[0].email, id: result[0].id };
    });
};

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};

// auth endpoints

app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
    db.query(
        `SELECT * FROM user WHERE email = ${db.escape(username)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or password is incorrect!'
                });
            }
            // check password
            bcrypt.compare(
                password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        // const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
                        const user = { username, password, id: result[0].id }
                        const accessToken = generateAccessToken(user);
                        const refreshToken = generateRefreshToken(user);
                        updateRefreshToken(user,refreshToken);

                        db.query(
                            `UPDATE user SET last_login = now() WHERE id = '${result[0].id}'`
                        );
                        return res.status(200).send({
                            msg: 'Logged in!',
                            username: user.username,
                            isAdmin: user.isAdmin,
                            accessToken,
                            refreshToken,
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );

});

app.post("/auth/logout", authenticate, (req, res) => {
    const refreshToken = req.body.token;
    updateRefreshToken(req.user.username,null);
    res.status(200).json("You logged out successfully.");
});

app.post("/auth/refresh", async (req, res) => {
    //take the refresh token from the user
    const refreshToken = req.body.token;

    //send error if there is no token or it's invalid
    if (!refreshToken) return res.status(401).json("You are not authenticated!");

    db.query('SELECT * FROM user WHERE refresh_token = ?', refreshToken, (error, result) => {
        if (error) throw error;
        console.log(result)
        const user = result.length == 0 ? 0 : { username: result[0].email, id: result[0].id };

        console.log('us', user)
        if (!user) {
            return res.status(403).json("Refresh token is not valid!");
        }

        jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
            err && console.log(err);

            const newAccessToken = generateAccessToken(user);
            const newRefreshToken = generateRefreshToken(user);

            updateRefreshToken(user, newRefreshToken);

            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        });

    })

    //if everything is ok, create new access token, refresh token and send to user
});

// /users/signup
app.post('/users/register', rules(), validate, (req, res) => {
    db.query(
        `SELECT * FROM user WHERE LOWER(email) = LOWER(${db.escape(req.body.email)});`,
        (err, result) => {

            if (result.length) {
                return res.status(409).send({
                    msg: 'This user is already in use!'
                });
            } else {
                // username is available
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {
                        // has hashed pw => add to database
                        db.query(
                            `INSERT INTO user (name, email, password) VALUES ('${req.body.name}', ${db.escape(
                                req.body.email
                            )}, 
                            ${db.escape(hash)})`,
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                return res.status(201).send({
                                    msg: 'The user has been registerd with us!'
                                });
                            }
                        );
                    }
                });
            }
        }
    );
});

// AUTHORIZATION

app.get('/protected', authenticate, (req, res) => {
    res.send({message:'Welcome!', user: req.user});
});

app.get('/authorize', authenticate, authorize(['admin@oc.com']), (req, res) => {
    res.send({message:'Welcome!', user: req.user});
});

app.listen(port, ()=> console.log(`listening on port ${port}`))