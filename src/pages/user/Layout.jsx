import { Route, Routes } from 'react-router-dom';
import { SideBar } from '../../components/user/SideBar';
import { Profile } from '@/pages/user/Profile';
import { Register } from '@/pages/user/Register';
import '@/static/styles/layout.css';
import '@/static/styles/layout.css'
import { Certificate } from './Certificate';

export const Layout = () => {
  return (
    <div className='container-padre'>
      <div className='bg-dark'>
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
