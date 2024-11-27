const jwt = require('jsonwebtoken');
const secret = 'mySecretKey123';

exports.generateToken = (payload) => jwt.sign(payload, secret, { expiresIn: '1h' });

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
};
