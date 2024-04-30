import React from 'react';
import './header.css';
import logo from '../../assets/JHLogo.jpg';

const Header = () => {
  return (
    <body className="header">
      <section className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </section>
    </body>
  );
};

export default Header;