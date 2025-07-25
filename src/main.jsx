import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import StarRunPage from './pages/StarRunPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/star-run" element={<StarRunPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
