var PortfolioManager = require("./api/portfolios");
var UserManager = require("./api/user");


module.exports = function (app, db) {
	"use strict";
	var portfolioManager = new PortfolioManager(db);
	var userManager = new UserManager(db);

	app.get('/api/portfolios', portfolioManager.getPortfolios);
	app.use('/api/user', userManager.createUser);

	// All other routes should redirect to the index.html
	app.route('/*')
		.get(function(req, res) {
			res.sendFile(app.get('appPath') + '/index.html');
		});
};