import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/JHLogo.jpg';

const Header = () => {
  return (
    <header className="header">
      <section className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </section>
      <h1 className="h1-title">James Hutchinson - Front-End Web Design and Development</h1>
    </header>
  );
};

export default Header;