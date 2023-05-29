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
            <li className='items-router text-decoration-none bg-white rounded'>
              <Link
                to='/'
                style={{ color: selectedItem === 0 ? '#ff0000' : '#090909' }}
                onClick={() => handleItemClick(0)}>
                <CgProfile className='item-icons' /> Perfil
              </Link>
            </li>
            <li className='items-router text-decoration-none bg-white rounded mt-3'>
              <Link
                to='/certificados'
                style={{ color: selectedItem === 1 ? '#ff0000' : '#090909' }}
                onClick={() => handleItemClick(1)}>
                <TbCertificate className='item-icons' /> Certificados
              </Link>
            </li>
            <li className='items-router text-decoration-none bg-white rounded mt-3'>
              <Link
                to='/registros'
                style={{ color: selectedItem === 2 ? '#ff0000' : '#090909' }}
                onClick={() => handleItemClick(2)}>
                <FaRegCheckSquare className='item-icons' /> Registros
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
