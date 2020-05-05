const router = require('express').Router()
const user = require('../../components/auth/auth.ctrl');

router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router;
