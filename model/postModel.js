const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  userid: {
    type: Number,
    required: false,
    trim: false
  }
})

const posts = mongoose.model("post", postSchema);
module.exports = posts;