const express = require('express');
const { markAttendance, getAttendanceHistory } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/mark-attendance', authMiddleware, markAttendance);
router.get('/attendance-history', authMiddleware, getAttendanceHistory);

module.exports = router;
