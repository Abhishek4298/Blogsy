const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  postid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true
  },
  like: {
    type: Boolean,
  }
})
 
const Likes = mongoose.model("like", likeSchema);
module.exports = Likes;