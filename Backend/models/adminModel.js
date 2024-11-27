const db = require('../config/db');

const Admin = {
    login: (email, callback) => {
        const query = 'SELECT * FROM admin WHERE email = ?';
        db.query(query, [email], (err, results) => {
            callback(err, results);
        });
    },
    addTeacher: (name, email, password, callback) => {
        const query = 'INSERT INTO teachers (name, email, password) VALUES (?, ?, ?)';
        db.query(query, [name, email, password], (err, results) => {
            callback(err, results);
        });
    },
    getAllUsers: (callback) => {
        const query = 'SELECT * FROM students UNION SELECT * FROM teachers';
        db.query(query, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = Admin;
