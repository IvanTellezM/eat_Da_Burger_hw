//import connection.js into this file
var connection = require('../config/connection.js');

//cretate the code that will execute MySql commands
var orm = {
	//this function will select all burgers from the table which is a user input
	selectAllBurgers: function(tableInput, cb) {
		var s = "SELECT * FROM " + tableInput + ";";
		connection.query(s, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
	addBurger: function(tableInput, burgerInput, cb) {
		var a = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
		connection.query(a, [burgerInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
	devourBurger: function(tableInput, idInput, cb) {
		var d = "UPDATE" + tableInput + " SET devoured = 1 WHERE id = ?";
		connection.query(d, [idInput], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};