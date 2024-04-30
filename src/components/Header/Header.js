import React from 'react';
import './header.css';
import logo from '../../assets/JHLogo.jpg';

const Header = () => {
  return (
    <body className="header">
      <section className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </section>
      <h1 className="h1-title">James Hutchinson - Front-End Web Design and Developer</h1>
    </body>
  );
};

export default Header;