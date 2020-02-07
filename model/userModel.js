const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number
   },
  name: {
    type: String
   },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
})

const users = mongoose.model("user", userSchema);
module.exports = users;