const express = require('express');
const { getStudentAttendance } = require('../controllers/teacherController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/attendance/:studentId', authMiddleware, getStudentAttendance);

module.exports = router;
