const Question = require("../models/question")
const User = require("../models/user")
const helper = require("./helper.js")

exports.create_question = function (req, res) {
  let question = new Question({
    index: req.body.index,
    question: req.body.question
  });
  question.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(question)
    }
  })
};

exports.get_questions = function (req, res) {
  Question.find({}, function (err, questions) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(questions)
    }
  })
}

exports.questionnaire = async function (req, res) {
  const { indices } = req.body;
  const { id } = req.userData;
  const companyNamePlaceholder = "[company name]";
  const companyDescriptionPlaceholder = "[company description]";

  const actualCompanyName = "ABC Company";
  
  const user = await User.findById(id);
  const actualCompanyDescription = user.businessDescription; 

  Question.find({ index: { $in: indices } }, async function (err, questions) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      try {
        let longAnswer = "";
        
        const promises = questions.map(async (question) => {
          const conversation = [];
          question.question = question.question.replace(companyNamePlaceholder, actualCompanyName);
          question.question = question.question.replace(companyDescriptionPlaceholder, actualCompanyDescription);

          conversation.push({ "role": "user", "content": question.question });
          const data = {
            "model": "gpt-3.5-turbo",
            "messages": conversation
          }
          let response = await helper.openAIRequest(data)
          longAnswer += response.content;
        });

        await Promise.all(promises);
        return res.status(200).json({longAnswer})

      } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error, Please try again." });
      }
    }
  })
}