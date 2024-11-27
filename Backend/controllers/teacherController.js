exports.getStudentAttendance = (req, res) => {
  const { studentId } = req.params;
  const sql = 'SELECT * FROM attendance WHERE user_id = ?';
  db.query(sql, [studentId], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(results);
  });
};
