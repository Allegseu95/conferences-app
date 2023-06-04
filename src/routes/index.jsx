import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';

import { PublicRoutes } from './public';
import { AdminRoutes } from './admin';
import { UserRoutes } from './user';

export const RouterManager = () => {

  const { role } = useAuth();

  const [routeRole, setRouteRole] = useState('');

  useEffect(() => {
    setRouteRole(role);
  }, [role]);

  return (
    <BrowserRouter>
      {routeRole === 'administrator' ? (
        <AdminRoutes />
      ) : routeRole === 'participant' ? (
        <UserRoutes />
      ) : (
        <PublicRoutes />
      )}
    </BrowserRouter>
  );
};
