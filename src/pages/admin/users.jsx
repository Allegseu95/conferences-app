import React, { useState } from 'react';
import '@/static/base/base.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from '@/pages/admin/sidebar';


export const Users = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return currentData.map((row, index) => {
      const { nombre, apellido, cedula, email, telefono, direccion, empresa } = row;
      return (
        <tr key={index}>
          <td className='padding_td' >{nombre}</td>
          <td className='padding_td' >{apellido}</td>
          <td className='padding_td' >{email}</td>
          <td className='padding_td' >{telefono}</td>
          <td className='padding_td' >{cedula}</td>
          <td className='padding_td' >{direccion}</td>
          <td className='padding_td' >{empresa}</td>
        </tr>
      );
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return <div className="pagination pagination-move mt-1">
         <button className='btn btn-primary p-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
          <span className='p-1'>
             {'<'} anterior
            </span>
        </button>
        <ul className='m-3'>
          <li className="current-page">{currentPage}</li>
        </ul>
        <button className='btn btn-success p-1' onClick={handleNextPage} disabled={currentPage === totalPages}>
          <span className='p-1'>
            siguiente {'>'}
          </span>
        </button>
      </div>
  };

  return (
    <div className='content_base'>
      <Sidebar></Sidebar>
      <div className="container contentwithoutsidebar">
        <h1 className='mb-2'>Usuarios Registrados <FontAwesomeIcon icon={faUsers} /></h1>
        <table className='table table-striped'>
        <thead className='header_dark'>
          <tr>
            <th className='paddin_table' scope='col'>Nombre</th>
            <th className='paddin_table' scope='col'>Apellido</th>
            <th className='paddin_table' scope='col'>Correo</th>
            <th className='paddin_table' scope='col'>Teléfono</th>
            <th className='paddin_table' scope='col'>Cédula</th>
            <th className='paddin_table' scope='col'>Direccion</th>
            <th className='paddin_table' scope='col'>Empresa</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );

};