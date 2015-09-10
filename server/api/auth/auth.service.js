var config = require("../../config/environment");
var jwt = require('jsonwebtoken');

var auth = {};

auth.signToken = function(id) {
    return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60 * 5 });
};

module.exports = auth;
