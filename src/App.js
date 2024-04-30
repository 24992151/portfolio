import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
