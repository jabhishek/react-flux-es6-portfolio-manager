var controller = require("./todosController")();
var express = require("express");
var router = express.Router();

// routes
router.get('/', controller.index);

module.exports = router;

