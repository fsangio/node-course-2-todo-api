var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    minlength: 1
  },
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  }
});

var User = mongoose.model('User', userSchema);

module.exports = {User}
