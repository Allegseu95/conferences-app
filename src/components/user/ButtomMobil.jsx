import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

export const ButtomMobil = ({ showSidebar }) => {

  const handleClick = () => {
    showSidebar(); // Llamar al método showSidebar al hacer clic en el botón
  };
  return (
    <div className='d-md-none'>
      <button className='btn px-1 open-btn text-white' onClick={handleClick}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
