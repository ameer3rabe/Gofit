import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Membership from '../components/Membership';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleNavLinkClick = (e) => {
      const target = e.target;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        
        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleNavLinkClick);
    return () => document.removeEventListener('click', handleNavLinkClick);
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <AboutUs />
      <Membership />
      <Footer />
    </div>
  );
};

export default Home;