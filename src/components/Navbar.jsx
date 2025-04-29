// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="container">
        <Link className="logo" to="/">Blog</Link>
        <ul className={`nav ${isMenuOpen ? 'show' : ''}`}>
          <li className="item"><Link className="link" to="/">Home</Link></li>
          <li className="item"><Link className="link" to="/about">About</Link></li>
          <li className="item"><Link className="link" to="/portfolio">Portfolio</Link></li>
          <li className="item"><Link className="link" to="/blog">Blog</Link></li>
          <li className="item"><Link className="link" to="/contact">Contact</Link></li>
        </ul>
        <button 
          type="button" 
          id="nav-toggle" 
          className={`hamburger hamburger--elastic ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;