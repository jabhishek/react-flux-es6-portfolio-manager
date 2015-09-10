var _ = require("lodash");
var UserDAO = require("../data/user");
var hasher = require("./auth/hasher");
var auth = require("./auth/auth.service");

function UserManager(db) {
    var portfolios = new UserDAO(db);

    function buildUser(data) {
        var salt = hasher.createSalt();

        return {
            _id: data.username,
            password: hasher.computeHash(data.password, salt),
            salt: salt
        }
    }

    this.createUser = function (req, res) {
        console.log(req.body);
        var data = req.body;
        if (!data || !data.username || !data.password) {
            res.status(400).send('Invalid User passed');
        } else {
            var user = buildUser(data);
            portfolios.createUser(user)
                .then(function () {
                    // send back json web token (log the user in) if user creation successful
                    var token = auth.signToken(user._id);
                    console.log(token);
                    res.status(200).send({token: token});
                }, function (err) {
                    console.log(err);
                    res.status(400).send(err);
                });
        }
    }
}

module.exports = UserManager;
