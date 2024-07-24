import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import SessionStorageProvider from './SessionStorageManager';

const App: React.FC = () => {
  return (
    <SessionStorageProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </SessionStorageProvider>
  );
};

export default App;
