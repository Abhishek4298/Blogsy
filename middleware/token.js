const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyToken = function(req, res, next) {
  console.log(req.cookies.token);
  const token = req.cookies.token;
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, async function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      req.user = {
        name: decoded.name,
        id: decoded.id,
        role: decoded.role,
        like : decoded.like
      };
      next();
    }
  })
}