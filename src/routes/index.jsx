import { BrowserRouter } from 'react-router-dom';

import { PublicRoutes } from './public';
import { AdminRoutes } from './admin';
import { UserRoutes } from './user';

export const RouterManager = () => {
  const initRoute = 'admin'; // public | admin | user
  return (
    <BrowserRouter>
      {initRoute === 'public' ? (
        <PublicRoutes />
      ) : initRoute === 'admin' ? (
        <AdminRoutes />
      ) : initRoute === 'user' ? (
        <UserRoutes />
      ) : null}
    </BrowserRouter>
  );
};
