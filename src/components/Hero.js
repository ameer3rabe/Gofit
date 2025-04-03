import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';
import heroImage from '../assets/homescreenpic.png';

const Hero = () => {
  const navigate = useNavigate();
  const statsRefs = useRef([]);
  
  useEffect(() => {
    // Animation for stats
    statsRefs.current.forEach((stat, index) => {
      const valueText = stat.textContent;
      const targetNumber = parseInt(valueText.replace(/[^0-9]/g, ''));
      
      let currentNumber = 0;
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      const increment = targetNumber / steps;
      
      const counterAnimation = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(counterAnimation);
        }
        
        let formattedNumber;
        if (valueText.includes('k')) {
          formattedNumber = Math.floor(currentNumber) + 'k';
        } else {
          formattedNumber = Math.floor(currentNumber);
        }
        
        if (valueText.includes('+')) {
          formattedNumber += '+';
        }
        
        if (stat) {
          stat.innerHTML = formattedNumber + '<span class="highlight">+</span>';
        }
      }, interval);

      return () => clearInterval(counterAnimation);
    });
  }, []);

  const handleVideoClick = () => {
    alert('Video functionality would be implemented here!');
  };
  
  const handleGetStarted = () => {
    navigate('/signup');
  };

  // For parallax effect on accents
  useEffect(() => {
    const accentElements = document.querySelectorAll('.accent');
    
    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
      
      accentElements.forEach((accent, index) => {
        const rate = (index + 1) * 0.8;
        if (accent) {
          accent.style.transform = `translate(${moveX * rate}px, ${moveY * rate}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Elevate Your <span className="highlight">Fitness</span><br />with Proven Expertise.</h1>
        <p>Achieve your goals with tailored training and expert guidance.<br />Experience real results in a supportive environment.</p>
        
        <div className="cta-buttons">
          <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
          <button className="watch-video-btn" onClick={handleVideoClick}>
            <span className="play-icon"><i className="fas fa-play"></i></span>
            Watch video
          </button>
        </div>
        
        <div className="stats">
          <div className="stat-item">
            <h2 ref={el => statsRefs.current[0] = el}>210k<span className="highlight">+</span></h2>
            <p>Happy<br />Customers</p>
          </div>
          <div className="stat-item">
            <h2 ref={el => statsRefs.current[1] = el}>121<span className="highlight">+</span></h2>
            <p>Fitness<br />Workshops</p>
          </div>
          <div className="stat-item">
            <h2 ref={el => statsRefs.current[2] = el}>147k<span className="highlight">+</span></h2>
            <p>Professional<br />Trainers</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Fitness trainer with dumbbells" />
        <div className="accent accent-1"></div>
        <div className="accent accent-2"></div>
        <div className="accent accent-3"></div>
        <div className="accent accent-4"></div>
      </div>
    </section>
  );
};

export default Hero;