import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import StarRunPage from './pages/StarRunPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio"> {/* use your repo name here */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/star-run" element={<StarRunPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
