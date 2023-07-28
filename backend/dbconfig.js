require("dotenv").config();

const mysql = require('mysql');

const PORT = process.env.PORT;

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'starter_app'
});

connection.connect((error) => {
    if(error){
        console.log('database connection fail');
    }
});

module.exports = connection;