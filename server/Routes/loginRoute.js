const {authenticateLogin} = require('../Controller/LoginController')

const router = require("express").Router();

router.post('/login', authenticateLogin);

module.exports = router;