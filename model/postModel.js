const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  userid: {
    type: Number,
    required: false,
  }
})

const posts = mongoose.model("post", postSchema);
module.exports = posts;