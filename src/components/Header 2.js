import React from 'react';
import './Header.js';
import logo from '../assets/logo.png';  // Adjust the path based on where you saved the image

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="UCBMealz Logo" className="logo" />
    </header>
  );
}

export default Header;
