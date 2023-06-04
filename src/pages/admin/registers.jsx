import React, { useState } from 'react';
import '@/static/base/base.css';
import {
  faUser,
  faScrewdriver,
  faBullseye,
  faXmark,
  faEye,
  faCheck,
  faChainBroken,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MethodsAlert } from '@/helpers/alerts';
import { showBasicAlert, question, see } from '@/helpers/sweetAlert';
import { Sidebar } from '@/pages/admin/sidebar';

export const Regitsers = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const confirmar = () => {
    showBasicAlert('Acción confimada con exito', 'success', 'Registro confirmado');
  };
  const ver = () => {
    see(
      'Verificación de voucher',
      'https://www.ejemplode.com/images/uploads/voucher.jpg',
      '200px',
      '200px'
    );
  };
  const eliminar = () => {
    question(
      'Esta seguro de rechazar el registro',
      'warning',
      'esta acción no puede ser rebertida'
    );
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return currentData.map((row, index) => {
      const { tipopago, fecha_registro, inscripciones, usuario, total, estado } = row;
      return (
        <tr key={index}>
          <td className='padding_td'>{tipopago}</td>
          <td className='padding_td'>{fecha_registro}</td>
          <td className='padding_td'>{inscripciones}</td>
          <td className='padding_td'>{usuario}</td>
          <td className='padding_td'>{total}</td>
          <td className='padding_td'>{estado}</td>
          <td className='padding_td options'>
            <button onClick={confirmar} className='btn btn-success p-1'>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
            <button onClick={eliminar} className='btn btn-danger p-1'>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <button
              onClick={ver}
              className='btn btn-primary p-1'
              data-toggle='modal'
              data-target='exampleModal'>
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
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
      <div className='container contentwithoutsidebar'>
        <h1 className='mb-1'>
          Registros <FontAwesomeIcon icon={faFolder} />{' '}
        </h1>
        <table className='table table-striped'>
          <thead className='header_dark'>
            <tr>
              <th className='paddin_table' scope='col'>
                Tipo Pago
              </th>
              <th className='paddin_table' scope='col'>
                Fecha Registro
              </th>
              <th className='paddin_table' scope='col'>
                Inscripciones
              </th>
              <th className='paddin_table' scope='col'>
                Usuario
              </th>
              <th className='paddin_table' scope='col'>
                Total
              </th>
              <th className='paddin_table' scope='col'>
                Estado
              </th>
              <th className='paddin_table' scope='col'>
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );
};
