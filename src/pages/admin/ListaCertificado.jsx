import React, { useState } from 'react';
import '@/static/base/base.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from '@/pages/admin/sidebar';
import { Link } from 'react-router-dom';
import { see } from '@/helpers/sweetAlert';
import { MdAddToPhotos } from 'react-icons/md';
import { faEye, faCheck } from '@fortawesome/free-solid-svg-icons';

export const ListaCertificado = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const verPhoto = () => {
    see(
      'Verificación de voucher',
      'https://www.ejemplode.com/images/uploads/voucher.jpg',
      '90%',
      '400px',
      '700px'
    );
  };

  const verCertificado = () => {
    see(
      'Verificación de voucher',
      'https://www.ejemplode.com/images/uploads/voucher.jpg',
      '90%',
      '400px',
      '700px'
    );
  };
  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return currentData.map((row, index) => {
      const { price, startDate, type, title, description, endDate } = row;
      return (
        <tr key={index}>
          <td className='padding_td'>{price}</td>
          <td className='padding_td'>{type}</td>
          <td className='padding_td'>{startDate}</td>
          <td className='padding_td'>{title}</td>
          <td className='padding_td'>{description}</td>
          <td className='padding_td'>{endDate}</td>
          <td className='d-flex p-5'>
            <FontAwesomeIcon
              onClick={verPhoto}
              className='fs-5 btn btn-success mx-2'
              icon={faCheck}></FontAwesomeIcon>
            <FontAwesomeIcon
              onClick={verCertificado}
              className='fs-5 btn btn-primary'
              icon={faEye}></FontAwesomeIcon>
          </td>
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
          onClick={() => handlePageChange(i)}>
          {i}
        </li>
      );
    }
    return (
      <div className='pagination pagination-move mt-1'>
        <button
          className='btn btn-primary p-2'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}>
          <span className='p-1'>{'<'} anterior</span>
        </button>
        <ul className='m-3'>
          <li className='current-page'>{currentPage}</li>
        </ul>
        <button
          className='btn btn-success p-1'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}>
          <span className='p-1'>siguiente {'>'}</span>
        </button>
      </div>
    );
  };

  return (
    <div className='content_base'>
      <Sidebar></Sidebar>
      <div className=' contentwithoutsidebar2'>
        <div className='contenedorLista'>
          <h1 className='mb-2'>
            Usuarios Registrados <FontAwesomeIcon icon={faUsers} />
          </h1>
          <Link to='/crear-curso' className='btn btn-success p-3'>
            <MdAddToPhotos className='fs-4' /> Crear Curso
          </Link>
          <table className='table table-striped mt-4'>
            <thead className='header_dark'>
              <tr>
                <th className='paddin_table' scope='col'>
                  Precio
                </th>
                <th className='paddin_table' scope='col'>
                  Tipo
                </th>
                <th className='paddin_table' scope='col'>
                  Fecha Inicio
                </th>
                <th className='paddin_table' scope='col'>
                  Titulo
                </th>
                <th className='paddin_table' scope='col'>
                  Descripcion
                </th>
                <th className='paddin_table' scope='col'>
                  Fecha fin
                </th>
                <th className='paddin_table' scope='col'>
                  *
                </th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </div>
      {renderPagination()}
    </div>
  );
};
