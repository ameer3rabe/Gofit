import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="logo">
            <span className="logo-text">Go<span className="highlight">Fit</span></span>
          </div>
          <p className="footer-description">
            Achieve your fitness goals with tailored training and expert guidance.
            Experience real results in a supportive environment.
          </p>
          <div className="social-media">
            <h3>Follow on Social Media</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone-alt"></i>
              <a href="tel:0512345678">0512345678</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@gofit.com">info@gofit.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Tel Aviv, Israel</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025 &copy; All rights reserved by GoFit.</p>
      </div>
    </footer>
  );
};

export default Footer;