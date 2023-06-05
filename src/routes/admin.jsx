import { Routes, Route, Navigate } from 'react-router-dom';
import { Users } from '@/pages/admin/users';
import { usersfake } from '@/mock/users';
import { Regitsers } from '@/pages/admin/registers';
import { Asistencias  } from '@/pages/admin/asistencia';
import { coursesFake } from '@/mock/course'
import { registersfake } from '@/mock/registers';
import { ListaCertificado } from '@/pages/admin/ListaCertificado';
import { CrearCurso } from '@/pages/admin/CrearCurso';

const itemsPerPage = 6;
export const AdminRoutes = () => (
  <Routes>
    <Route
      path='/registros'
      element={<Regitsers data={registersfake} itemsPerPage={itemsPerPage} />}
    />
    <Route path='/usuarios' element={<Users data={usersfake} itemsPerPage={itemsPerPage} />} />
    <Route path='/asistencias' element={<Asistencias />} />
    <Route path='/crear-curso' element={<CrearCurso />} />
    <Route path='/lista-certificados' element={<ListaCertificado data={coursesFake} itemsPerPage={itemsPerPage} />} />
    <Route path='*' element={<Navigate to='/registros' />} />
  </Routes>
);