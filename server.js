var express = require("express");
var app = express();
var connect = require("connect");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
	res.send("HELLO WORLD! I GOT THIS TO WORK!")
});

app.listen(PORT, function() {
	console.log("Server listening on %s", PORT);
});