var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  index: {
    required: true,
    type: mongoose.Schema.Types.Number
  },
  question: {
    type: mongoose.Schema.Types.String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', QuestionSchema);