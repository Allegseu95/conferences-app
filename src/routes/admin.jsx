import { Routes, Route, Navigate } from 'react-router-dom';

import { Users } from '@/pages/admin/users';
import { usersfake } from '@/mock/users';
import { Regitsers } from '@/pages/admin/registers';
import {Asistencias  } from '@/pages/admin/asistencia';
import { registersfake } from '@/mock/registers';

const itemsPerPage = 10;
export const AdminRoutes = () => (
  <Routes>
    <Route
      path='/registros'
      element={<Regitsers data={registersfake} itemsPerPage={itemsPerPage} />}
    />
    <Route path='/usuarios' element={<Users data={usersfake} itemsPerPage={itemsPerPage} />} />
    <Route path='/asistencias' element={<Asistencias/>} />
    <Route path='*' element={<Navigate to='/registros' />} />
  </Routes>
);
