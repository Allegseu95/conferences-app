import { Routes, Route, Navigate } from 'react-router-dom';
import { Users } from '@/pages/admin/users';
import { usersfake } from '@/mock/users';
import { Regitsers } from '@/pages/admin/registers';
import { Asistencias } from '@/pages/admin/asistencia';
import { CreateCourse } from '@/pages/admin/CreateCourse';
import { UpdateCourse } from '@/pages/admin/UpdateCourse';
import { ListCourse } from '@/pages/admin/ListCourse';
import { ListAsistent } from '@/pages/admin/ListAsistent';

const itemsPerPage = 11;
export const AdminRoutes = () => (
  <Routes>
    <Route path='/registros' element={<Regitsers />} />
    <Route path='/usuarios' element={<Users data={usersfake} itemsPerPage={itemsPerPage} />} />
    <Route path='/asistencias' element={<Asistencias />} />
    <Route path='/crear-curso' element={<CreateCourse />} />
    <Route path='/editCourse/:curseId' element={<UpdateCourse />} />
    <Route path='/lista-certificados' element={<ListCourse />} />
    <Route path='/lista-asistencias' element={<ListAsistent />} />
    <Route path='*' element={<Navigate to='/registros' />} />
  </Routes>
);
