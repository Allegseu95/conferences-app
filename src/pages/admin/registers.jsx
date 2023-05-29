import React, { useState } from 'react';
import '@/static/base/base.css';
import { faUser, faScrewdriver, faBullseye, faXmark, faEye, faCheck, faChainBroken, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MethodsAlert } from '@/helpers/alerts';

export const Regitsers = ({ data, itemsPerPage }) => {
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
      const { tipopago, fecha_registro, inscripciones, usuario, total, voucher } = row;
      return (
        <tr key={index}>
          <td className='padding_td' >{tipopago}</td>
          <td className='padding_td' >{fecha_registro}</td>
          <td className='padding_td' >{inscripciones}</td>
          <td className='padding_td' >{usuario}</td>
          <td className='padding_td' >{total}</td>
          <td className='padding_td' >{voucher}</td>
          <td className='padding_td options' >
            <button onClick={MethodsAlert.confirmemethod} className='btn btn-success p-1'>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
            <button onClick={MethodsAlert.question} className='btn btn-danger p-1'>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
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
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return <div className="pagination pagination-move mt-1">
        <button className='btn btn-primary' onClick={handlePreviousPage} disabled={currentPage === 1}>
          {'< anterior'}
        </button>
        <ul>
          <li className="current-page">{currentPage}</li>
        </ul>
        <button className='btn btn-success' onClick={handleNextPage} disabled={currentPage === totalPages}>
          {'siguiente>'}
        </button>
      </div>
  };

  return (
    <div className='content_base'>
      <div className="container contentwithoutsidebar">
        <h1 className='mb-1'>Registros de Usuarios <FontAwesomeIcon icon={faFolder} /> </h1>
        <table className='table table-striped'>
        <thead className='header_dark'>
          <tr>
            <th className='paddin_table' scope='col'>Tipo Pago</th>
            <th className='paddin_table' scope='col'>Fecha Registro</th>
            <th className='paddin_table' scope='col'>Inscripciones</th>
            <th className='paddin_table' scope='col'>Usuario</th>
            <th className='paddin_table' scope='col'>Total</th>
            <th className='paddin_table' scope='col'>Voucher</th>
            <th className='paddin_table' scope='col'>Opciones</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );

};