import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordManager from './components/PasswordManager';
import PasswordGenerator from './components/PasswordGenerator';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/password-manager" element={<PasswordManager />} />
      </Routes>
    </Router>
  );
};

export default App;
