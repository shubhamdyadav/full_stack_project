const jwt = require('../utils/jwtUtils');

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;
  const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, password, role], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.generateToken({ id: results[0].id, role: results[0].role });
    res.status(200).json({ token });
  });
};
