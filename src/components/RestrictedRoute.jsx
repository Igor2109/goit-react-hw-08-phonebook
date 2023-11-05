import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(state => state.auth.authenticated);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
