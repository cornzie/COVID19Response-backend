const router = require('express').Router()
const user = require('../../components/auth/auth.ctrl');

router.get('/', function(req, res) {
    res.link('signup', '/signup');
    res.link('login', '/login');
    return res.success('Covid19 Nigeria Staging Api');
});
router.all('/signup', user.signup);
router.all('/login', user.login);

module.exports = router;
