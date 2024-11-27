import axios from 'axios';

const API_URL = '/api/student';

export const markAttendance = async (data) => {
  const response = await axios.post(`${API_URL}/mark-attendance`, data);
  return response.data;
};

export const getAttendanceHistory = async () => {
  const response = await axios.get(`${API_URL}/attendance-history`);
  return response.data;
};
