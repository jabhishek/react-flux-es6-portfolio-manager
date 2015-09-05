import Request from 'superagent';

var portFolioApi = {};
portFolioApi.getPortfolios = function() {
    return new Promise(function(resolve, reject) {
        Request.get("/api/portfolios")
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.body);
                }
            });
    });
};

export default portFolioApi;