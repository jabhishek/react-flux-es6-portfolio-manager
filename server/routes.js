var PortfolioManager = require("./api/portfolios");


module.exports = function (app, db) {
	"use strict";
	var portfolioManager = new PortfolioManager(db);

	app.use('/api/portfolios', portfolioManager.getPortfolios);

	// All other routes should redirect to the index.html
	app.route('/*')
		.get(function(req, res) {
			res.sendFile(app.get('appPath') + '/index.html');
		});
};