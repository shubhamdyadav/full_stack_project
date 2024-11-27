const db = require('../config/db');

const Teacher = {
    login: (email, callback) => {
        const query = 'SELECT * FROM teachers WHERE email = ?';
        db.query(query, [email], (err, results) => {
            callback(err, results);
        });
    },
    getStudentList: (callback) => {
        const query = 'SELECT * FROM students';
        db.query(query, (err, results) => {
            callback(err, results);
        });
    }
};

module.exports = Teacher;
