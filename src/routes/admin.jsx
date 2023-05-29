import { Routes, Route, Navigate } from 'react-router-dom';

import { Users } from '@/pages/admin/users';
import { usersfake } from '@/datafake/users';
import { Regitsers } from '@/pages/admin/registers';
import { registersfake } from '@/datafake/registers';

const itemsPerPage = 5;
export const AdminRoutes = () => (
  <Routes>
    <Route
      path='/registros'
      element={<Regitsers data={registersfake} itemsPerPage={itemsPerPage} />}
    />
    <Route path='/usuarios' element={<Users data={usersfake} itemsPerPage={itemsPerPage} />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
