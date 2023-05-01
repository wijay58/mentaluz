var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FavoriteSchema = new Schema({
  user: {
    required: true,
    type: mongoose.Schema.Types.ObjectId
  },
  task: {
    type: mongoose.Schema.Types.ObjectId
  },
  response: {
    type: mongoose.Schema.Types.String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Favorite', FavoriteSchema);