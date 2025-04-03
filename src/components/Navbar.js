import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <span className="logo-text">Go<span className="highlight">Fit</span></span>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => handleNavigation('/signin')}>Login</button>
          <button className="signup-btn" onClick={() => handleNavigation('/signup')}>Signup</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;