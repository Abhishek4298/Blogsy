const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyToken = function(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, async function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      req.id = decoded.id;
      req.role = decoded.role;
      /* res.locals.custom = true;
      res.locals.id = decoded.id */
      next();
    }
  })
}