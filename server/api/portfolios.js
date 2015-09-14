var _ = require("lodash");
var PortfolioDAO = require("../data/portfolios");

var user = "abhi";

function PortfolioManager(db) {
    var portfolios = new PortfolioDAO(db);

    this.getPortfolios = function (req, res) {
        function processData(data) {
            if (_.isArray(data)) {
                res.status(200).send({portfolios: data[0].portfolios});
            }
        }

        function processError(err) {
            res.status(400).send({error: err});
        }

        // abhi-todo remove hardcoded user
        portfolios.getPortfolios(user)
            .then(
            processData,
            processError
        );
    };

    this.addPortfolio = function (req, res) {
        var portfolio = req.body.name;

        portfolios.addPortfolio(user, portfolio)
            .then(function () {
                res.status(200).send("Portfolio added");
            }, function (err) {
                res.status(400).send({error: err});
            })
    }
}

module.exports = PortfolioManager;
