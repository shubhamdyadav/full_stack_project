exports.markAttendance = (req, res) => {
    const { userId, timestamp, selfie } = req.body;
    const sql = 'INSERT INTO attendance (user_id, timestamp, selfie) VALUES (?, ?, ?)';
    db.query(sql, [userId, timestamp, selfie], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: 'Attendance marked' });
    });
  };
  
  exports.getAttendanceHistory = (req, res) => {
    const sql = 'SELECT * FROM attendance WHERE user_id = ?';
    db.query(sql, [req.user.id], (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json(results);
    });
  };
  