const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const task_controller = require("../controllers/task_controller.js");

router.post('/', checkAuth, task_controller.create_task);
router.get('/', checkAuth, task_controller.get_tasks);

module.exports = router;