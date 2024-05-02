import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import Footer from './components/Footer/Footer';
import GymPage from './pages/Gym/GymPage';
import JDMPage from './pages/JDM/JdmPage';
import DubaiPage from './pages/Dubai/DubaiPage';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/jdm" element={<JDMPage />} />
          <Route path="/dubai" element={<DubaiPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
