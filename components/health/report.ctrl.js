const { HealthForm, QuarantineForm } = require('./forms.model');

const user = {};
const admin = {};

user.fillHealthForm = (req, res) => {
    let form = new HealthForm();

    if(req.method === 'GET') {
        return res.success(form.schema);
    } else {
        console.log('REQ.BODY', req.body);
        return form.create({...req.body, user_id: req.session.user_id})
        .then(result => {
            console.log('RESULT', result);
            return res.success();
        });
    }
}
user.fillQuarantineForm = (req, res) => {
    let form = new QuarantineForm();
    if(req.method === 'GET') {
        return res.success(form.schema);
    } else {
        return form.create({...req.body, user_id: req.session.user_id})
        .then(result => {
            console.log('RESULT', result);
            return res.success();
        });
    }
}

module.exports = { user, admin };
