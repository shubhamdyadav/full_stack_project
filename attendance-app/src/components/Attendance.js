import React, { useState } from 'react';
import { markAttendance, getAttendanceHistory } from '../services/attendanceService';

const Attendance = () => {
  const [selfie, setSelfie] = useState('');
  const [history, setHistory] = useState([]);

  const handleMarkAttendance = async () => {
    const response = await markAttendance({ selfie });
    console.log(response);
  };

  const fetchHistory = async () => {
    const response = await getAttendanceHistory();
    setHistory(response);
  };

  return (
    <div>
      <input value={selfie} onChange={(e) => setSelfie(e.target.value)} placeholder="Upload Selfie" />
      <button onClick={handleMarkAttendance}>Mark Attendance</button>
      <button onClick={fetchHistory}>View Attendance History</button>
      <ul>
        {history.map((record, index) => (
          <li key={index}>{record.timestamp}</li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
