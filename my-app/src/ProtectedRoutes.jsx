import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './Components/userData';
const isAuthenticated = () => {
    const { user } = useContext(UserContext);
    return user !== undefined && user !== null;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default ProtectedRoute;