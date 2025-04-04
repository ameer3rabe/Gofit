// src/pages/SignUp.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (phoneNumber.trim() !== '' && 
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword) {
      const success = register(phoneNumber, password);
      if (success) {
        navigate('/otp');  // Navigate to OTP verification
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClose = () => {
    navigate('/signin'); // Navigate to sign in page
  };

  return (
    <div className="auth-page">
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
       
          <h1>Create your <span className="highlight">Account</span></h1>
          <p>Join GoFit to start your fitness journey</p>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-with-icon">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirm-password" 
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          
          <button type="submit" className="auth-button">Register</button>
          
          <div className="auth-divider">
            <span>Or sign up with</span>
          </div>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/signin" className="highlight">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;