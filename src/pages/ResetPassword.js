// src/pages/ResetPassword.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const ResetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { resetPassword, confirmReset } = useAuth();

  // Check if we're coming back from OTP verification
  useState(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('afterOtp') === 'true') {
      setShowNewPasswordForm(true);
    }
  }, [location]);

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    
    if (phoneNumber.trim() !== '') {
      const success = resetPassword(phoneNumber);
      if (success) {
        navigate('/otp?reset=true');  // Navigate to OTP verification with reset flag
      }
    }
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword.trim() !== '' && 
        confirmNewPassword.trim() !== '' &&
        newPassword === confirmNewPassword) {
      const success = confirmReset(newPassword);
      if (success) {
        navigate('/signin');  // Navigate to sign in page
      }
    }
  };

  const clearPhoneNumber = () => {
    setPhoneNumber('');
    document.getElementById('phone').focus();
  };

  const handleClose = () => {
    navigate('/signin'); // Navigate to sign in page
  };

  return (
    <div className="auth-page">
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Forgot <span className="highlight">Password</span></h1>
          <p>Enter your phone number to reset password</p>
          <button 
            className="close-button" 
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
        
        {!showNewPasswordForm ? (
          <form className="auth-form" id="forgot-form" onSubmit={handleForgotSubmit}>
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
            
            <button type="submit" className="auth-button">Continue</button>
          </form>
        ) : (
          <form className="auth-form" id="new-password-form" onSubmit={handleNewPasswordSubmit}>
            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <div className="input-with-icon">
                <input 
                  type={showNewPassword ? "text" : "password"}
                  id="new-password" 
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span className="toggle-password" onClick={() => setShowNewPassword(!showNewPassword)}>
                  <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="confirm-new-password">Confirm New Password</label>
              <div className="input-with-icon">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-new-password" 
                  placeholder="Confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            
            <button type="submit" className="auth-button">Reset Password</button>
          </form>
        )}
        
        <div className="auth-footer">
          <p>Remember your password? <Link to="/signin" className="highlight">Sign In</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;