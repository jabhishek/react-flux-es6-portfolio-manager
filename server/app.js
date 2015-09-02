"use strict";
var express = require('express');
var path = require("path");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 9000;
var MongoClient = require("mongodb").MongoClient;

var rootPath = path.normalize(__dirname + '/..');
var appPath;

var app = express();

MongoClient.connect('mongodb://localhost:27017/portfolioManager', function(err, db) {
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

	if (app.get("env") === "development") {
		//app.use(morgan('dev'));
		app.use(require('connect-livereload')());
		appPath = path.join(rootPath, 'client');
	}
	if (app.get("env") === "production") {
		appPath = path.join(rootPath, 'build');
	}


	app.use(express.static(appPath));
	app.set("appPath", appPath);

	require("./routes")(app, db);

	app.listen(port, function () {
		console.log('Listening on port ' + port + " in mode: " + app.get("env"));
	});


});