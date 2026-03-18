import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const loggedinUser = useSelector((state) => state.auth.loggedinUser);
  return (
    loggedinUser ? children : <Navigate to={"/"}  replace/>
  )
}

export default ProtectedRoute