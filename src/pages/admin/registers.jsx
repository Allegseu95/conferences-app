import React, { useState, useEffect } from 'react';
import momentjs from 'moment';

import '@/static/base/base.css';
import { faXmark, faEye, faCheck, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { showBasicAlert, question, see } from '@/helpers/sweetAlert';

import { Sidebar } from '@/pages/admin/sidebar';
import { useServer } from '@/contexts/ServerContext';

export const Regitsers = ({ data, itemsPerPage }) => {
  const server = useServer();

  const [regsters, setregisters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getregisterapi = async () => {
    const datos = await server.getRegisters();
    setregisters(datos);
  };

  const updateregister = async (status, registerid) => {
    const datosupdate = Object.freeze({
      status,
      registerId: registerid,
    });
    const datosregistro = await server.UpdateStatus(datosupdate);
    if (datosregistro !== undefined) {
      confirmar('Registro actualizado con exito', 'registro actualizado');
    }
  };

  useEffect(() => {
    getregisterapi();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const confirmar = (titulo, accion) => {
    showBasicAlert(titulo, 'success', accion);
  };
  const ver = (url) => {
    see('Verificación de voucher', `${url}`, '200px', '200px');
  };
  const eliminar = () => {
    question(
      'Esta seguro de rechazar el registro',
      'warning',
      'esta acción no puede ser rebertida'
    );
  };

  const getInscriptions = (array) => {
    const inscriptions = [];
    array.forEach((element) => {
      let pushed = element.courseId === null ? '' : element.courseId.description;
      inscriptions.push(pushed);
    });
    return inscriptions.toString();
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedRegsters = regsters.slice(startIndex, endIndex);

    return slicedRegsters.map((row, index) => {
      const { _id, typePayment, total, status, voucherURL, createdAt, inscriptions, userId } = row;
      return (
        <tr key={index}>
          <td className='padding_td'>{typePayment}</td>
          <td className='padding_td'>{momentjs(createdAt).format('YYYY-MM-DD')}</td>
          <td className='padding_td'>{getInscriptions(inscriptions)}</td>
          <td className='padding_td'>
            {userId === null ? 'Sin usuario' : userId.name + ' ' + userId.lastname}
          </td>
          <td className='padding_td'>{total}</td>
          <td className='padding_td'>{status}</td>
          <td className='padding_td options'>
            {/* <button onClick={getregisterapi()} className='btn btn-success p-1'>
          </button> */}
            <button onClick={() => updateregister(status, _id)} className='btn btn-success p-1'>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
            <button onClick={eliminar} className='btn btn-danger p-1'>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <button
              onClick={() => ver(voucherURL)}
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
