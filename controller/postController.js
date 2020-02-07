const postModel = require('../model/postModel');

exports.addPost = async function (req,res) {
  const createPost = new postModel(req.body);
  createPost.userid = req.id;
  try {
    const ans = await createPost.save();
    res.send(ans);
  } catch (err) {
    res.status(500).end(err);
  }
}

exports.getPost =  async function (req, res) {
  try {
    if(req.role == "Admin") {
      const posts = await postModel.find();
      res.send(posts);
    }
    else {
      const posts = await postModel.find({ userid: req.id }, { userid: 0});
      res.send(posts);
    }
  } catch (err) {
      res.status(500).send(err);
  }
  
}

