const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const task_controller = require("../controllers/task_controller.js");

router.post('/', checkAuth, task_controller.create_task);
router.get('/', checkAuth, task_controller.get_tasks);
router.get('/groups', checkAuth, task_controller.get_tasks_groups_by_specialist);
router.put('/', checkAuth, task_controller.update_tasks);
router.put('/:id', checkAuth, task_controller.update_task);

module.exports = router;