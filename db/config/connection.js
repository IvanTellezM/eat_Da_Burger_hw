//set up the code to connect Node to MySQL

var express    = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var app 			 = require("express");


var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  database : "burgers_db"
});

