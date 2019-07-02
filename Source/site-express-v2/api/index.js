const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const getunit1 = require('./router/getunit1');
const getunit2 = require('./router/getunit2');
const getunit3 = require('./router/getunit3');
const getunit4 = require('./router/getunit4');
const getunit5 = require('./router/getunit5');

const port = 8000;

// Create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
});

// Connect to the database
db.connect((err) => {
    if (err) { throw err; }
    console.log('Connected to the database');
});
global.db = db;

// Configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// Routes
app.use('/unit1', getunit1);
app.use('/unit2', getunit2);
app.use('/unit3', getunit3);
app.use('/unit4', getunit4);
app.use('/unit5', getunit5); 

// Set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
