import { Routes, Route, Navigate } from 'react-router-dom';

import { Users } from '@/pages/admin/users';
import { usersfake } from '@/mock/users';
import { Regitsers } from '@/pages/admin/registers';
import { Asistencias } from '@/pages/admin/asistencia';
import { registersfake } from '@/mock/registers';
import { CrearCurso } from '@/pages/admin/CrearCurso';
import { UpdateCourse } from '@/pages/admin/UpdateCourse';
import { Lista } from '@/pages/admin/Lista';

const itemsPerPage = 10;
export const AdminRoutes = () => (
  <Routes>
    <Route
      path='/registros'
      element={<Regitsers data={registersfake} itemsPerPage={itemsPerPage} />}
    />
    <Route path='/usuarios' element={<Users data={usersfake} itemsPerPage={itemsPerPage} />} />
    <Route path='/asistencias' element={<Asistencias />} />
    <Route path='/crear-curso' element={<CrearCurso />} />
    <Route path='/editCourse/:curseId' element={<UpdateCourse />} />
    <Route path='/lista-certificados' element={<Lista />} />
    <Route path='*' element={<Navigate to='/registros' />} />
  </Routes>
);
