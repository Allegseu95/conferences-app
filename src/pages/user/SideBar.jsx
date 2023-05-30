import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { TbCertificate } from 'react-icons/tb';
import { FaRegCheckSquare } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export const SideBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <div className='text-center clase-boton d-md-none'>
        <div className='d-flex justify-content-center'>
          <button className='botonclick btn px-1 open-btn text-white' onClick={showSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div className='navegacion-sidebar'>
        <div className={`bg-dark sidebar ${sidebarVisible ? 'active' : ''}`} id='side_nav'>
          <div className='bg-dark px-2 pt-3 pb-4'>
            <h1 className='fs-4 text-center'>
              <span className='bg-dark text-white text-dark rounded shadow px-5 py-2 me-2'>
                Usuario
              </span>
            </h1>
            <button
              className='btn d-md-none d-block bg-dark close-btn px-1 py-0 text-white'
              onClick={hideSidebar}>
              <GiHamburgerMenu />
            </button>
          </div>
          <ul className='list-unstyled px-2'>
            <li
              onClick={() => handleItemClick(0)}
              style={{ backgroundColor: selectedItem === 0 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded'>
              <Link
                to='/'
                className='d-flex text-dark align-items-center m-2'
                onClick={() => {
                  hideSidebar();
                }}>
                <CgProfile className='fs-4 m-2' /> Perfil
              </Link>
            </li>
            <li
              onClick={() => handleItemClick(1)}
              style={{ backgroundColor: selectedItem === 1 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded mt-3'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/certificados'
                style={{ color: selectedItem === 1 ? '#00fa32' : '#090909', height: '40px' }}
                onClick={() => {
                  hideSidebar();
                }}>
                <TbCertificate className='fs-4 m-2' /> Certificados
              </Link>
            </li>
            <li
              onClick={() => handleItemClick(2)}
              style={{ backgroundColor: selectedItem === 2 ? '#00fa32' : '#fff' }}
              className='text-decoration-none rounded mt-3'>
              <Link
                className='d-flex text-dark align-items-center m-2'
                to='/registros'
                style={{ color: selectedItem === 2 ? '#00fa32' : '#090909', height: '40px' }}
                onClick={() => {
                  hideSidebar();
                }}>
                <FaRegCheckSquare className='fs-4 m-2' /> Registros
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
