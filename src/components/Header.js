import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="UCBMealz Logo" className="logo" />
    </header>
  );
}

export default Header;
