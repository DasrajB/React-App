// ProtectedRoute.js
import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from './LoginContext';

const ProtectedRoute = ({ children }) => {
    const {isAuthenticated, setIsAuthenticated} = useContext(LoginContext)

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
