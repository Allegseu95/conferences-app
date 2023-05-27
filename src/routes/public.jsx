import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '@/pages/public/Home';

export const PublicRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
