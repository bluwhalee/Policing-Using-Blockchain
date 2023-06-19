const router = require('express').Router();

const operatorDashboard = require('./operatorDashboard/operatorDashboardRoutes');
const adminDashboard = require('./adminDashboard/adminDashboardRoutes');

router.use('/operator',operatorDashboard);
router.use('/admin',adminDashboard);

module.exports = router;