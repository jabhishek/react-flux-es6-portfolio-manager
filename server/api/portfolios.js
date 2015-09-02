var _ = require("lodash");
var PortfolioDAO = require("../data/portfolios");

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

        portfolios.getPortfolios("abhi")
            .then(
                processData,
                processError
            );
    }
}

module.exports = PortfolioManager;
