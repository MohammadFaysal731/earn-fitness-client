import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.inti';

const RequireAuth = () => {
  const [user,loading]=useAuthState(auth);
  const location =useLocation();
  if(loading){
    return <Loading/>
  }
  if(!user){
    return <Navigate to="/sign-in" state={{from: location}}replace/>
  }
  return <Outlet/>
};

export default RequireAuth;