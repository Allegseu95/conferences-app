import React from 'react'
import { Sidebar } from './sidebar'
import '@/static/base/base.css';

export const ListAsistent = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          asistencia
        </div>
      </div>
    </div>
  );
}
