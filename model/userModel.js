const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");


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
    unique: true
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  }
})

userSchema.plugin(uniqueValidator);
const users = mongoose.model("users", userSchema);
module.exports = users;