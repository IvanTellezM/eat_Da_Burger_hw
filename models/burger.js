var orm = require('../config/orm.js');

var burgers = {
  addBurger: function(burgerInput, cb){
    orm.addBurger("burgers", burgerInput, cb);
  },
  devourBurger: function(idInput, cb){
    orm.devourBurger("burgers", idInput, cb);
  },
  findAllBurgers: function(cb) {
	  orm.selectAllBurgers("burgers", function(res){
	    cb(res);
	 });
	}
};

module.exports = burgers;