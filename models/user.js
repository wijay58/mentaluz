var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {
        type: mongoose.Schema.Types.String
    },
    phone: {
        type: mongoose.Schema.Types.String
    },
    password: {
        type: mongoose.Schema.Types.String
    },
    imageUrl: {
      type: mongoose.Schema.Types.String
    },
    firstname: {
        type: mongoose.Schema.Types.String
    },
    lastname: {
        type: mongoose.Schema.Types.String
    },
    businessDescription: {
        type: mongoose.Schema.Types.String,
        default: 'Click to edit your business description.'
    },
    user_type: {
        type: mongoose.Schema.Types.Number,
        default: 0
        // 0=employee 1=admin
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);