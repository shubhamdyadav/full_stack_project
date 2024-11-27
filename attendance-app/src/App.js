import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Attendance from './components/Attendance';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <Attendance />
      <Dashboard />
      <Profile />
    </div>
  );
};

export default App;
