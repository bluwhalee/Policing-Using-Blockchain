const router = require('express').Router();

const login = require('./loginRoute');
const operatorDashboard = require('./Dashboards/operatorDashboard/operatorDashboardRoutes');
const Dashboard = require('./Dashboards/dashboardsRouter');

router.use(login);
router.use('/dashboard',Dashboard);

module.exports = router;