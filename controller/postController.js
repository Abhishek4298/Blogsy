const postModel = require('../model/postModel');

exports.getaddPost = async function(req,res)
{
  res.render('addPost');
}

exports.addPost = async function (req,res) {
  const createPost = new postModel(req.body);
  createPost.userid = req.id;
  try {
    const ans = await createPost.save();
    res.redirect('post')
  } catch (err) {
    res.status(500).end(err);
  }
}

exports.getPost =  async function (req, res) {
  try {
    if(req.role == "Admin") {
      const posts = await postModel.find();
      res.render('viewPost');
    }
    else {
      const posts = await postModel.find({ userid: req.id }, { userid: 0});
      res.render('viewPost',{post:posts});
    }
  } catch (err) {
      res.status(500).send(err);
  }
}

exports.getDashboard = function (req, res) {
  res.render('dashboard', { name:req.name });
}
