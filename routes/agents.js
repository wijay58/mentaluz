const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const agent_controller = require("../controllers/agent_controller");

router.post('/youtubeTitle', checkAuth, agent_controller.youtube_title);
router.post('/youtubeScript', checkAuth, agent_controller.youtube_script);
router.post('/youtubeDescription', checkAuth, agent_controller.youtube_description);

module.exports = router;