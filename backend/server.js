const express = require('express')
const cors = require('cors')

const connection = require('./dbconfig');



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

app.post('/sign-up', function(req, res, next) {    
    console.log('working',req.body)
    res.json(req.body)

    const data = req.body;
    connection.query('INSERT INTO user SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})


app.post('/create', (req, res) => {
    const data = req.body;
    connection.query('INSERT INTO student SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.listen(port, ()=> console.log(`listening on port ${port}`))