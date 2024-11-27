const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Attendance = sequelize.define('Attendance', {
  studentId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  selfieUrl: DataTypes.STRING,
});

module.exports = Attendance;
