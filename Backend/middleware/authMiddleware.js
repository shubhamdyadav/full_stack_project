const jwt = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Invalid token' });
  req.user = decoded;
  next();
};

module.exports = authMiddleware;
