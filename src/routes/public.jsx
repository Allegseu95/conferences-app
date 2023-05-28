import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '@/pages/public/Home';
import { LoginPage } from '@/pages/public/Login';

export const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
