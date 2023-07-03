const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const user_controller = require("../controllers/user_controller");

router.get('/', checkAuth, user_controller.user_get);
router.post('/', user_controller.validate(), user_controller.user_post);
router.post('/login', user_controller.user_login);
router.post('/googleLogin', user_controller.user_login_google);
router.put('/', checkAuth, user_controller.updateUser);

module.exports = router;
