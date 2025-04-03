// src/pages/OtpVerification.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const otpInputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyOtp } = useAuth();
  
  // Determine if we're resetting password
  const isPasswordReset = location.search.includes('reset=true');

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsResendDisabled(false);
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const otpValue = otp.join('');
    if (otpValue.length === 4) {
      const success = verifyOtp(otpValue);
      if (success) {
        if (isPasswordReset) {
          navigate('/reset-password?afterOtp=true'); // Go to set new password
        } else {
          navigate('/'); // Go to home after successful registration
        }
      }
    }
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    if (!isResendDisabled) {
      // Reset OTP inputs
      setOtp(['', '', '', '']);
      otpInputRefs[0].current.focus();
      
      // Reset countdown
      setTimeLeft(45);
      setIsResendDisabled(true);
      
      // Here you would call your API to resend OTP
      console.log('Resending OTP...');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    navigate('/signin'); // Navigate to sign in page or any appropriate page
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1><span className="highlight">OTP</span> Verification</h1>
          <p>Check your phone to see the verification code</p>
          <button 
            className="close-button" 
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="otp-input"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={otpInputRefs[index]}
                autoFocus={index === 0}
              />
            ))}
          </div>
          
          <div className="resend-code">
            <p>Send code in <span id="countdown">{formatTime(timeLeft)}</span></p>
            <a 
              href="#" 
              id="resend-link" 
              className={isResendDisabled ? "disabled" : ""}
              onClick={handleResendOtp}
            >
              Resend Code
            </a>
          </div>
          
          <button type="submit" className="auth-button">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;