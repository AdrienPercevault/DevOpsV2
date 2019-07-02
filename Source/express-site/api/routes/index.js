var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tableau de bord'});
});

router.get('/unit1', function(req, res, next) {
  var resultArray1 = [];
  var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
  });
  
  dbconnection.query('SELECT * FROM unit1', function(err, rows) {
    if(err) throw err;
    resultArray1.push(rows)
    res.render('unit1', { items: resultArray1[0] });
  });

  // next();
});

router.get('/unit2', function(req, res, next) {
  var resultArray = [];
  var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
  });
  
  dbconnection.query('SELECT * FROM unit2', function(err, rows) {
    if(err) throw err;
    resultArray.push(rows)
    console.log(resultArray[0])
    res.render('unit2', { items: resultArray[0] });
  });
  
  // next();
});

router.get('/unit3', function(req, res, next) {
  var resultArray = [];
  var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
  });
  
  dbconnection.query('SELECT * FROM unit3', function(err, rows) {
    if(err) throw err;
    resultArray.push(rows)
    console.log(resultArray[0])
    res.render('unit3', { items: resultArray[0] });
  });
  
  // next();
});

router.get('/unit4', function(req, res, next) {
  var resultArray = [];
  var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
  });
  
  dbconnection.query('SELECT * FROM unit4', function(err, rows) {
    if(err) throw err;
    resultArray.push(rows)
    console.log(resultArray[0])
    res.render('unit4', { items: resultArray[0] });
  });
  
  // next();
});

router.get('/unit5', function(req, res, next) {
  var resultArray = [];
  var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devops'
  });
  
  dbconnection.query('SELECT * FROM unit5', function(err, rows) {
    if(err) throw err;
    resultArray.push(rows)
    console.log(resultArray[0])
    res.render('unit5', { items: resultArray[0] });
  });
  
  // next();
});

module.exports = router;
