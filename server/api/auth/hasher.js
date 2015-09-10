
var crypto = require("crypto");

var hasher = {};
hasher.createSalt = function (len) {
    "use strict";
    len = len || 8;
    return crypto.randomBytes(len / 2).toString('hex');
};

hasher.computeHash = function (source, salt) {
    "use strict";
    var hmac = crypto.createHmac('sha1', salt);
    var hash = hmac.update(source);
    return hash.digest("hex");
};

module.exports = hasher;