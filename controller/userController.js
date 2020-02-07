const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const config = require('../config');

exports.register = async function (req, res) {
  const createUser = new User(req.body);
  await createUser.save(function (err, User) {
    res.status(200).send({ status: true, token: createUser });
  });
}

exports.login = async function(req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, function (err, User) {
  if (err) return res.status(500).send('Error on the server.');
  if (!User) return res.status(404).send('No user found.');
  const token = jwt.sign({ id: User.id, role: User.role }, config.secret);
  res.status(200).send({ auth: true, token: token });
});
};
