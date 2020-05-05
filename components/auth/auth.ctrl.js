const { User } = require('./user.model.js');

module.exports = {
    login: (req, res) => {
        console.log('REQ', req);
        let user = new User();
        return user.login(req.body)
        .then( result => {
            console.log('LOGGED IN', result);
            return res.send("Logging you in");
        });
    },
    signup: (req, res) => {
        console.log('REQ', req.body);
        let user = new User();
        return user.signup(req.body).then( result => {
            console.log('SIGNED UP', result);
            return res.send("Signup successful. Please log in");
        });
    }
}

