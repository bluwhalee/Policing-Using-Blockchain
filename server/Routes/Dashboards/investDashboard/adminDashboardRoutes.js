const router = require('express').Router();

const registerFir = require('./userRoute');

router.use(registerFir);

module.exports = router;