var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  task: {
    type: mongoose.Schema.Types.String
  },
  formFields: {
    type: mongoose.Schema.Types.Array
  },
  text: {
    type: mongoose.Schema.Types.String
  },
  group: {
    type: mongoose.Schema.Types.String
  },
  specialist: {
    type: mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', TaskSchema);