import React from 'react';
import '../styles/aboutus.css';
import aboutUsImage from '../assets/aboutus.png';

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutUsImage} alt="About us Pic" />
          <div className="accent accent-1"></div>
          <div className="accent accent-2"></div>
        </div>
        <div className="about-content">
          <p className="pre-headline">About Us</p>
          <h2>Experience the <span className="highlight">Best in Fitness:</span> Here's Why?</h2>
          <p className="about-description">
            Access everything through our innovative app designed to elevate your fitness journey. 
            Enjoy custom training plans tailored to your goals, easily track your membership payments, 
            and monitor your fitness progress in real-time. Our all-in-one solution makes your 
            fitness experience seamless and effective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;