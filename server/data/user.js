var _ = require("lodash");
var Q = require("Q");

function UserData(db) {
    var accounts = db.collection("accounts");

    this.createUser = function(user) {
        var deferred = Q.defer();
        accounts.findOne({ _id: user._id }, function(err, data) {
            if (!data) {
                accounts.insert(user, function(err, data) {
                    if (err) {
                        console.log(err);
                        deferred.reject(err);
                    } else {
                        console.log(data);
                        deferred.resolve(data);
                    }
                });
            } else {
                deferred.reject('User already exists');
            }

        });
        return deferred.promise;
    }
}

module.exports = UserData;
