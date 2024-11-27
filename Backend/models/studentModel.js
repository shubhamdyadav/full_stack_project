const db = require('../config/db');

const Student = {
    register: (name, email, password, profilePicture, callback) => {
        const query = 'INSERT INTO students (name, email, password, profile_picture) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, password, profilePicture], (err, results) => {
            callback(err, results);
        });
    },
    login: (email, callback) => {
        const query = 'SELECT * FROM students WHERE email = ?';
        db.query(query, [email], (err, results) => {
            callback(err, results);
        });
    },
    getAttendanceHistory: (studentId, callback) => {
        const query = 'SELECT * FROM attendance WHERE student_id = ? ORDER BY date DESC';
        db.query(query, [studentId], (err, results) => {
            callback(err, results);
        });
    },
    markAttendance: (studentId, date, time, selfie, callback) => {
        const query = 'INSERT INTO attendance (student_id, date, time, selfie) VALUES (?, ?, ?, ?)';
        db.query(query, [studentId, date, time, selfie], (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = Student;
