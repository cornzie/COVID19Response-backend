const { User } = require('./user.model.js');

module.exports = {
    login: (req, res, next) => {
        if(req.method === 'POST') {
            console.log('REQ', req.body);
            let user = new User();
            return user.login(req.body)
            .then( result => {
                //req.session.touch();
                req.session.email = result.email;
                req.session.user_id = result._id;
                return res.send("Logging you in");
            })
            .catch(err => next(err));
        }
    },
    signup: (req, res, next) => {
        console.log('REQ METHOD', req.method);
        let user = new User();

        if(req.method === 'POST') {
            console.log('REQ', req.session);
            return user.signup(req.body).then( result => {
                req.session.email = result.email;
                req.session.user_id = result._id;
                return res.send("Signup successful. Please log in");
            })
            .catch(err => next(err));
        } else if (req.method === 'GET') {
            return res.send(user.schema());
        }
    }
}

