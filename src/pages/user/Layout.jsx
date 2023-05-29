import { Route, Routes } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Profile } from '@/components/user/Profile';
import { Certificate } from '@/components/user/Certificate';
import { Register } from '@/components/user/Register';
import '@/static/styles/layout.css';

export const Layout = () => {
  return (
    <div className='container-padre'>
      <div className='content-sidebar'>
        <SideBar />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/certificados' element={<Certificate />} />
          <Route path='/registros' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};
