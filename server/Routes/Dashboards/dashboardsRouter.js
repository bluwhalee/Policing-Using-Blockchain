const router = require('express').Router();

const operatorDashboard = require('./operatorDashboard/operatorDashboardRoutes');

router.use('/operator',operatorDashboard);

module.exports = router;