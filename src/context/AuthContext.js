// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (phoneNumber, password) => {
    // Simulate login - in a real app, this would make an API call
    console.log('Form submitted successfully!');
    setUser({ phoneNumber });
    return true;
  };

  const register = (phoneNumber, password) => {
    // Simulate registration - in a real app, this would make an API call
    console.log('Registration submitted successfully!');
    return true;
  };

  const resetPassword = (phoneNumber) => {
    // Simulate password reset request
    console.log('Password reset requested');
    return true;
  };

  const confirmReset = (newPassword) => {
    // Simulate confirming password reset
    console.log('Password reset confirmed');
    return true;
  };

  const verifyOtp = (otp) => {
    // Simulate OTP verification
    console.log('OTP verified');
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        register, 
        resetPassword, 
        confirmReset,
        verifyOtp,
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);