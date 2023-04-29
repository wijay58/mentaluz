const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const favorite_controller = require("../controllers/favorite_controller.js");

router.post('/', checkAuth, favorite_controller.create_favorite);
// router.get('/', checkAuth, task_controller.get_tasks);

module.exports = router;