var _ = require("lodash");
var Q = require("Q");

function PortfolioData(db) {
    var accounts = db.collection("accounts");
    this.getPortfolios = function(user) {
        var deferred = Q.defer();
        accounts.find({ _id: user}).toArray(function(err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                if (_.isArray(data)) {
                    deferred.resolve(data);
                }
            }
        });
        return deferred.promise;
    };
    this.addPortfolio = function(user, portfolio) {
        var deferred = Q.defer();
        accounts.update({ _id: user}, { $push : { "portfolios" : portfolio } }, function(err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }
}

module.exports = PortfolioData;
