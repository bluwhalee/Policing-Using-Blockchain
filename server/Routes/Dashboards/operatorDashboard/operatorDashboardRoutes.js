const router = require('express').Router();

const registerFir = require('./firRoute');

router.use(registerFir);

module.exports = router;