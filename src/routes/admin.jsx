import { Routes, Route, Navigate } from 'react-router-dom';

import { DemoPage } from '@/pages/admin/Demo';

export const AdminRoutes = () => (
  <Routes>
    <Route path='/' element={<DemoPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
