import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/membership.css';

const Membership = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add hover effects and animations for plan cards
    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });

    return () => {
      // Clean up event listeners
      planCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <section className="membership" id="membership">
      <div className="membership-container">
        <div className="membership-header">
          <h1>Choose the <span className="highlight">Perfect Plan</span> for Your Goals</h1>
          <p>Select a membership plan that suits your fitness journey and goals. Unlock premium features and exclusive benefits.</p>
        </div>

        <div className="membership-plans">
          {/* Basic Plan */}
          <div className="plan-card basic-plan">
            <h2>Basic Plan</h2>
            <div className="price">
              <h3>150₪</h3>
              <p>Perfect for those just starting their fitness journey.</p>
            </div>
            <ul className="plan-features">
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                1 Month plan access
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Chip for gym access
              </li>
              <li className="feature-unavailable">
                <span className="cross-icon"><i className="fas fa-times-circle"></i></span>
                Custom work out Plans on the app
              </li>
            </ul>
            <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
          </div>

          {/* Standard Plan */}
          <div className="plan-card standard-plan">
            <div className="best-offer">
              <span>Best Offer</span>
            </div>
            <h2>Standard Plan</h2>
            <div className="price">
              <h3>450₪</h3>
              <p>Ideal for individuals looking to elevate their routine.</p>
            </div>
            <ul className="plan-features">
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                3 Month gym access
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Chip for gym access
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Custom work out Plans on the app
              </li>
            </ul>
            <button className="get-started-btn highlighted-btn" onClick={handleGetStarted}>Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="plan-card premium-plan">
            <h2>Premium Plan</h2>
            <div className="price">
              <h3>850₪</h3>
              <p>Perfect for those just starting their fitness journey.</p>
            </div>
            <ul className="plan-features">
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                6 Month gym access
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Chip for gym access
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Custom work out Plans on the app
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Discount
              </li>
              <li className="feature-available">
                <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                Full app access
              </li>
            </ul>
            <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;