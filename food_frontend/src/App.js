import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home149 from './pages/Home149';
import './styles/common.css';
import './styles/home-1-49.css';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home149 />} />
          <Route path="/home" element={<Home149 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
