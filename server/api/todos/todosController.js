var controller = function () {
	"use strict";
	var index = function (req, res) {
		"use strict";
		var todos = [{_id: 1, task: "Some task"}, {_id: 2, task: "Another task"}];
		res.status(200).json({todos: todos});
	};

	return {
		index: index
	}
};

module.exports = controller;

