import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../styles/CompleteProfile.css';

const CompleteProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  
  // Add error states for each required field
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    birthdate: false,
    gender: false,
    height: false,
    weight: false
  });
  
  const navigate = useNavigate();
  const { updateProfile } = useAuth();

  const validateForm = () => {
    const newErrors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === '',
      birthdate: birthdate.trim() === '',
      gender: gender.trim() === '',
      height: height.trim() === '',
      weight: weight.trim() === ''
    };
    
    setErrors(newErrors);
    
    // Check if any required field has an error
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const profileData = {
        firstName,
        lastName,
        birthdate,
        gender,
        email,
        height,
        weight
      };
      
      const success = updateProfile(profileData);
      if (success) {
        navigate('/');  // Navigate to home page after profile completion
      }
    }
    // If validation fails, errors will be displayed next to the fields
  };

  const clearField = (setter, fieldId) => {
    setter('');
    document.getElementById(fieldId).focus();
  };

  const handleClose = () => {
    // Navigate back or to home page
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Complete your <span className="highlight">Profile</span></h1>
          <p>Tell us more about yourself to personalize your experience</p>
          <button 
            className="close-button" 
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <div className="input-with-icon">
              <input 
                type="text" 
                id="firstName" 
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={errors.firstName ? "error-input" : ""}
              />
              {firstName && (
                <span className="clear-input" onClick={() => clearField(setFirstName, 'firstName')}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              )}
            </div>
            {errors.firstName && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> First name is required</div>}
          </div>
          
          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <div className="input-with-icon">
              <input 
                type="text" 
                id="lastName" 
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={errors.lastName ? "error-input" : ""}
              />
              {lastName && (
                <span className="clear-input" onClick={() => clearField(setLastName, 'lastName')}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              )}
            </div>
            {errors.lastName && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Last name is required</div>}
          </div>
          
          {/* Birthdate */}
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <div className="input-with-icon">
              <input 
                type="date" 
                id="birthdate" 
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className={`date-input ${errors.birthdate ? "error-input" : ""}`}
              />
            </div>
            {errors.birthdate && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Birthdate is required</div>}
          </div>
          
          {/* Gender - Radio Buttons */}
          <div className="form-group">
            <label>Gender</label>
            <div className={`gender-options ${errors.gender ? "error-border" : ""}`}>
              <label className="radio-container">
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <span className="radio-label">Male</span>
              </label>
              <label className="radio-container">
                <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <span className="radio-label">Female</span>
              </label>
            </div>
            {errors.gender && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Gender selection is required</div>}
          </div>
          
          {/* Email (Optional) */}
          <div className="form-group">
            <label htmlFor="email">Email (Optional)</label>
            <div className="input-with-icon">
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && (
                <span className="clear-input" onClick={() => clearField(setEmail, 'email')}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
              )}
            </div>
          </div>
          
          {/* Height and Weight in a grid */}
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <div className="input-with-icon">
                <input 
                  type="number" 
                  id="height" 
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={errors.height ? "error-input" : ""}
                />
                {height && (
                  <span className="clear-input" onClick={() => clearField(setHeight, 'height')}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </span>
                )}
              </div>
              {errors.height && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Height is required</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <div className="input-with-icon">
                <input 
                  type="number" 
                  id="weight" 
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={errors.weight ? "error-input" : ""}
                />
                {weight && (
                  <span className="clear-input" onClick={() => clearField(setWeight, 'weight')}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </span>
                )}
              </div>
              {errors.weight && <div className="error-message"><FontAwesomeIcon icon={faExclamationCircle} /> Weight is required</div>}
            </div>
          </div>
          
          <button type="submit" className="auth-button">Complete Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;