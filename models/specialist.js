var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SpecialistSchema = new Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  imageUrl: {
    type: mongoose.Schema.Types.String
  },
  info: {
    type: mongoose.Schema.Types.String
  },
  premium: {
    type: mongoose.Schema.Types.Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Specialist', SpecialistSchema);