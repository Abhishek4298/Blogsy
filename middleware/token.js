const jwt = require('jsonwebtoken');
const config = require('../config');  

exports.verifyToken = function(req, res, next) {
  const token = req.cookies.token;
  if (!token)
  {
    req.flash("error", "Must have to login in the system");
    return res.redirect("/login");
  }
  jwt.verify(token, config.secret, async function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      req.id = decoded.id;
      req.role = decoded.role;
      req.name = decoded.name;
      next();
    }
  })
}