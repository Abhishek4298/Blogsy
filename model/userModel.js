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
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  }
})

const users = mongoose.model("users", userSchema);
module.exports = users;