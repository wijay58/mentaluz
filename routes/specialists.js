const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const specialist_controller = require("../controllers/specialist_controller.js");

router.post('/', checkAuth, specialist_controller.create_specialist);
router.get('/', checkAuth, specialist_controller.get_specialists);
// router.get('/', checkAuth, task_controller.get_tasks);

module.exports = router;