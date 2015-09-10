import Request from 'superagent';

var userApi = {};
userApi.createUser = function(user) {
    return new Promise(function(resolve, reject) {
        Request.post("/api/user")
            .send(user)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    reject(response.text);
                } else {
                    resolve(response.body);
                }
            });
    });
};

export default userApi;