const router = require('express').Router();

const login = require('./loginRoute');

router.use(login);

module.exports = router;