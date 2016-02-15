var connection = require("..config/orm.js");

var burgers = {
	findAllBurgers: function(cb) {
	  orm.selectAll("burgers", function(res){
	    cb(res);
	  });
	}
  addBurger: function(burgerInput, cb){
    orm.add("burgers", burgerInput, cb);
  },
  devourBurger: function(idInput, cb){
    orm.devour("burgers", idInput, cb);
  },
};

module.exports = burgers;