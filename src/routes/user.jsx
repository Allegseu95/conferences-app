import { Routes, Route, Navigate } from 'react-router-dom';

import { DemoPage } from '@/pages/user/Demo';

export const UserRoutes = () => (
  <Routes>
    <Route path='/' element={<DemoPage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
