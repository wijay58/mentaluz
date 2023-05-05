const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const payment_controller = require("../controllers/payment_controller.js");

router.get('/checkout', checkAuth, payment_controller.checkout);
router.get('/validate_session', checkAuth, payment_controller.validate_session);
// router.get('/', checkAuth, task_controller.get_tasks);

module.exports = router;