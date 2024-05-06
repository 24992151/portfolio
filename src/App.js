import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import JdmPage from './pages/Jdm/JdmPage';
import GymPage from './pages/Gym/GymPage';
import DubaiPage from './pages/Dubai/DubaiPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jdm" element={<JdmPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/dubai" element={<DubaiPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
