const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const config = require("../config");

exports.getRegister = function(req, res) {
  res.render("register");
};

exports.register = async (req, res) => {
  try {
    const createUser = new User(req.body);
    await createUser.save();
    const token = jwt.sign(req.body, config.secret);
    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/dash");
  } catch (error) {
    return res.send({ message: error.message });
  }
};

exports.getLogin = function(req, res) {
  res.render("login");
};

exports.login = async function(req, res) {
  User.findOne({ email: req.body.uemail, password: req.body.psw }, function(
    err,
    User
  ) {
    if (err) return res.status(500).send("Error on the server.");
    if (!User) return res.status(404).send("No user found.");
    const token = jwt.sign({ id: User.id, role: User.role, name: User.name }, config.secret);
    res.cookie("token", token);
    res.redirect("/dash");
  });
};

exports.logout = async function(req,res)
{
  res.clearCookie("token").redirect("/login")
}