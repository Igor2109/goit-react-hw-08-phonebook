import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(state => state.auth.authenticated);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
