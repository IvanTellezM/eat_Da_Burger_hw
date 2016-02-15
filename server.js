var express = require("express");
var expressHandlebars = require("express-handlebars");
var app = express();
var connect = require("connect");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var route = require("./controllers/burgers_controller.js");
var PORT = process.env.NODE_ENV || 8080;

route.burgerController(app);
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
	console.log("Server listening on %s", PORT);
});