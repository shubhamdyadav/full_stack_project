const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'shubham', 
  database: 'student_app', 
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = db;  
