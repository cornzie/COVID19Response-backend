const router = require('express').Router()
const reports = require('../../components/health/report.ctrl');
const user = require('../../components/auth/auth.ctrl');
const books = require('../../components/entertainment/books.ctrl');
const notification = require('../../components/notifications/notifications.ctrl');

let links = {
    create_admin_account: '/admin/create-account',
    signup: '/signup',
    login: '/login',
    create_reminder: '/reminders/new',
    fill_health_form: '/forms/health',
    fill_quarantine_form: '/forms/quarantine',
    get_books: '/books/list',
    health_diagnostics: '/health/data'
}

router.get('/', function(req, res) {
    //if(!req.session.user_id) {
        res.link('signup', '/signup');
        res.link('login', '/login');
    //} else {
        res.link('health_form', links.fill_health_form);
        res.link('quarantine_form', links.fill_quarantine_form);
        res.link('get_books', links.get_books);
    //}
    return res.success('Covid19 Nigeria Staging Api');
});

router.post('/admin/create-account', user.createAdmin);
router.all('/signup', user.signup);
router.all('/login', user.login);
router.all('/reminders/new', notification.admin.createReminder);
router.all('/forms/health', reports.user.fillHealthForm);
router.all('/forms/quarantine', reports.user.fillQuarantineForm);
router.get('/books/list', books.list);
router.get(links.get_books, books.list);
router.get(links.health_diagnostics, reports.user.healthDiagnostics);

module.exports = router;
