const postModel = require("../model/postModel");
const Like = require("../model/likeModel");

exports.getaddPost = async function(req, res) {
  res.render("addPost");
};

exports.addPost = async function(req, res) {
  const createPost = new postModel(req.body);
  createPost.userid = req.user.id;
  try {
    const ans = await createPost.save();
    res.redirect("/post");
  } catch (err) {
    res.status(500).end(err);
  }
};

exports.getPost = async function(req, res) {
  try {
    if (req.role === "Admin") {
      const posts = await postModel.find();
      console.log("posts", posts);
      const likes = await Like.find({});

      if (posts) {
        res.render("getpost", { post: posts, like: likes, user: req.user.id });
      } else {
        res.render("getpost", { error: "Nothing to show" });
      }
    } else {
      const posts = await postModel.find({ userid: req.user.id });
      console.log("posts", posts);
      const likes = await Like.find({});

      if (posts) {
        res.render("viewPost", { post: posts, like: likes, user: req.user.id });
      } else {
        res.render("viewPost", { error: "Nothing to show" });
      }
    }
  } catch (err) {
    console.log(err);
     res.render("viewPost", { error: "Something went wrong" });
  }
};

exports.getLikes = async function(req, res) {
  console.log("req.body is ", req.body);
  const createLike = new Like(req.body);
  createLike.userid = req.user.id;
  console.log("Create like", createLike);
  try {
  if (req.body.like == 'like') {
  await createLike.save();
  res.redirect('/viewPost');
 } else {
      await Like.deleteOne({ postid: req.body.postid, userid: req.user.id });
        const obj = {
          postid: req.body.postid,
          userid: req.user.id,
          status: 'deleted'
        }
        res.redirect('/viewPost');
     }
  }
  catch (err) {
    res.send(err);
  }
};

exports.getDashboard = function(req, res) {
  req.flash("info", "Welcome");
  res.render("dashboard", { name: req.user.name });
};
