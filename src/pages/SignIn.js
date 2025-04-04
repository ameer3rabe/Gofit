// src/pages/SignIn.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (phoneNumber.trim() !== '' && password.trim() !== '') {
      const success = login(phoneNumber, password);
      if (success) {
        navigate('/');  // Navigate to home page
      }
    }
  };

  const clearPhoneNumber = () => {
    setPhoneNumber('');
    document.getElementById('phone').focus();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    // Since this is the sign-in page, you might want to 
    // navigate to a landing page or just close the modal
    // For now, let's assume you navigate to a landing page
    navigate('/');
  };

  return (
    <div className="auth-page">
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Sign in to your <span className="highlight">Account</span></h1>
          <p>Sign in to your Account</p>
          <button 
            className="close-button" 
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-with-icon">
              <input 
                type="tel" 
                id="phone" 
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <span className="clear-input" onClick={clearPhoneNumber}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          
          <div className="forgot-password">
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          
          <button type="submit" className="auth-button">Login</button>
          
          <div className="auth-divider">
            <span>Or login with</span>
          </div>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="highlight">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignIn;