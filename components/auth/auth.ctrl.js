const { User } = require('./user.model.js');

module.exports = {
    login: (req, res) => {
        console.log('REQ', req.body);
        let user = new User();
        return user.login(req.body)
        .then( result => {
            //req.session.touch();
            req.session.email = result.email;
            req.session.user_id = result._id;
            return res.send("Logging you in");
        });
    },
    signup: (req, res) => {
        console.log('REQ', req.session);
        let user = new User();
        return user.signup(req.body).then( result => {
            req.session.email = result.email;
            req.session.user_id = result._id;
            return res.send("Signup successful. Please log in");
        });
    }
}

