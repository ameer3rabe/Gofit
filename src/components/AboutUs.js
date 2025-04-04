import React from 'react';
import ImageSlider from './ImageSlider';
import '../styles/aboutus.css';
import img from '../assets/train.png';
import img2 from '../assets/train2.png';
import img3 from '../assets/train3.png';


const AboutUs = () => {
  const images = [
    img,
    img2,
    img3,
    
  ];

  return (
    <section className="about-us" id="about-us">
      <div className="about-container">
        <div className="about-image">
          <ImageSlider images={images} interval={1000} />
        </div>
        <div className="accent accent-1"></div>
        <div className="accent accent-2"></div>
        <div className="about-content">
          <p className="pre-headline">About Us</p>
          <h2>Experience the <span className="highlight">Best in Fitness</span> Here's why?</h2>
          <p className="about-description">
            Access everything through our innovative app designed to elevate your fitness journey.
            Enjoy custom training plans tailored to your goals, easily track your membership payments,
            and connect with like-minded fitness enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;