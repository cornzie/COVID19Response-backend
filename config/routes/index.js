const router = require('express').Router()
const reports = require('../../components/health/report.ctrl');
const user = require('../../components/auth/auth.ctrl');
const notification = require('../../components/notifications/notifications.ctrl');

router.get('/', function(req, res) {
    if(!req.session.user_id) {
        res.link('signup', '/signup');
        res.link('login', '/login');
    } else {
        res.link('fill_form_quarantine', '/forms/quarantine');
    }
    return res.success('Covid19 Nigeria Staging Api');
});
router.post('/admin/create-account', user.createAdmin);
router.all('/signup', user.signup);
router.all('/login', user.login);
router.all('/reminders/new', notification.admin.createReminder);
router.all('/forms/health', reports.user.fillHealthForm);
router.all('/forms/quarantine', reports.user.fillQuarantineForm);

module.exports = router;
