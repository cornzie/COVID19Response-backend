const { User } = require('./user.model.js');

module.exports = {
    login: (req, res, next) => {
        let user = new User();
        if(req.method === 'POST') {
            console.log('REQ', req.body);
            return user.login(req.body)
            .then( result => {
                //req.session.touch();
                console.log('LOGGED IN');
                req.session.email = result.email;
                req.session.user_id = result._id;
                res.add('user', {
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email: result.email,
                    phone: result.phone,
                    admin: result.admin
                });
                return res.success();
                // return res.send("Logging you in");
            })
            .catch(err => next(err));
        } else if (req.method === 'GET') {
            res.schema(user.schema('login'));
            return res.success();
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
                req.session.admin = result.admin;
                return res.success("Signup successful. Please log in");
            })
            .catch(err => next(err));
        } else if (req.method === 'GET') {
            res.schema(user.schema());
            return res.success();
        }
    },
    createAdmin: (req, res, next) => {
        console.log('REQ METHOD', req.method);
        let user = new User();

        if(req.method === 'POST') {
            console.log('REQ', req.session);
            return user.signup({...req.body, admin: true}).then( result => {
                req.session.email = result.email;
                req.session.user_id = result._id;
                req.session.admin = result.admin;
                return res.success("Signup successful. Please log in");
            })
            .catch(err => next(err));
        } else if (req.method === 'GET') {
            res.schema(user.schema());
            return res.success();
        }
    },
    requestPasswordReset: (req, res, next) => {
        let user = new User();
        return user.resetPassword()
        .then(result => {
            console.log('RESULT', result);
            return res.success('result');
        });
    }
}
