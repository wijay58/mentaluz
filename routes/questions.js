const express = require('express');
const router = express.Router();
const checkAuth = require('../checkAuth.js');
const question_controller = require("../controllers/question_controller.js");

router.post('/', checkAuth, question_controller.create_question);
router.post('/questionnaire', checkAuth, question_controller.questionnaire);
router.get('/', checkAuth, question_controller.get_questions);

module.exports = router;