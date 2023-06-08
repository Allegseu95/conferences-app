import React, { useState, useEffect } from 'react';
import momentjs from 'moment';
import DataTable from 'react-data-table-component';
import '@/static/base/base.css';
import { faXmark, faEye, faCheck, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillEye, AiFillSafetyCertificate } from 'react-icons/ai';
import { showBasicAlert, question, see } from '@/helpers/sweetAlert';
import { Link } from 'react-router-dom';
import { useLoader } from '@/contexts/LoaderContext';
import { Sidebar } from '@/pages/admin/sidebar';
import { useServer } from '@/contexts/ServerContext';
import Swal from 'sweetalert2';
export const Regitsers = ({ data, itemsPerPage }) => {
  const useserverapi = useServer();

  const { showLoader, hideLoader } = useLoader();
  const [regsters, setregisters] = useState([]);
  const [dnifilter, setdnfilter] = useState(regsters);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getregisterapi = async () => {
    showLoader();
    const datos = await useserverapi.getRegisters();
    setregisters(datos);
    setdnfilter(datos);
    hideLoader();
  };

  const eliminar = async() => {
    try {
      const response = await question(
        'Esta seguro de rechazar el registro',
        'warning',
        'esta acción no puede ser rebertida'
      );
      console.log('el response');
      console.log(response);
    } catch (error) {
      console.log(error);
      console.log('{{{error');
    }
  };

  const updateregister = async (status, registerid) => {
    let sendstatus = 'paid';
    // if (status === 'pending') {
    //   sendstatus = 'paid';
    // }

    const datosupdate = Object.freeze({
      status: sendstatus,
      registerId: registerid,
    });
    const datosregistro = await useserverapi.UpdateStatus(datosupdate);
    if (datosregistro !== undefined) {
      confirmar('Registro actualizado con exito', 'registro actualizado');
    }
    await getregisterapi();
  };
  const cancelregister = async (status, registerid) => {

    let sendstatus = 'reject';
    const datosupdate = Object.freeze({
      status: sendstatus,
      registerId: registerid,
    });

    Swal.fire(
      {
          title:'Esta seguro de rechazar el registro?',
          text:'esta acción no puede ser remediada',
          icon:'warning',
          buttons: true,
          showCancelButton: true,
          confirmButtonText: 'confirmar',
        }).then(async(willDelete) => {
          if (willDelete.isConfirmed) {
            const datosregistro = await useserverapi.UpdateStatus(datosupdate);
            console.log('el rechazado');
            console.log(datosregistro);
            new Swal('Tu registro fue rechazado exitosamente!', {
              icon: 'success',
            });
            await getregisterapi();
          } else {
            new Swal('Acción cancelada', {icon:'warning'});
            await getregisterapi();
          }
    });

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
 

  const getInscriptionstitle = (array) => {
    const inscriptions = [];
    array.forEach((element) => {
      let pushed = element.courseId === null ? '' : element.courseId.title;
      inscriptions.push(` ${pushed}`);
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
          <td className='padding_td'>
            {typePayment == 'transfer'
              ? 'Transferencia'
              : typePayment == 'efective'
              ? 'Efectivo'
              : ''}
          </td>
          <td className='padding_td'>{momentjs(createdAt).format('DD-MM-YYYY')}</td>
          <td className='padding_td'>{getInscriptionstitle(inscriptions)}</td>
          <td className='padding_td'>
            {userId === null ? 'Sin usuario' : userId.name + ' ' + userId.lastname}
          </td>
          <td className='padding_td'>{total + '$'}</td>
          <td className='padding_td'>
            {status == 'paid'
              ? 'Pagado'
              : status == 'pending'
              ? 'Pendiente'
              : status == 'rejected'
              ? 'Rechazado'
              : ''}
          </td>
          <td className='padding_td options'>
            <button
              onClick={() => updateregister(status, _id)}
              className='btn btn-success p-1 left'>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
            <button onClick={() => cancelregister(status, _id)} className='btn btn-danger p-1 left'>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <button
              disabled={voucherURL === null}
              onClick={() => ver(voucherURL)}
              className={
                voucherURL === null ? 'btn btn-secondary p-1 left' : 'btn btn-primary p-1 left'
              }
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

  const searchByDni = (event) => {
    console.log('el value');
    // row.userId === null? 'Sin usuario': row.userId.cedula
    console.log(event.target.value);
    const dnifilter = regsters.filter((dni) => {
      // ||
      if (dni.userId !== null && dni.userId !== undefined) {
        return dni.userId.cedula.startsWith(event.target.value);
      }
    });
    setdnfilter(dnifilter);
  };

  const columns = [
    {
      name: 'Cédula',
      selector: (row) => 
      row.userId === null? 'Sin usuario': row.userId.cedula,      
      sortable: true,
      width: '120px',
    },
    {
      name: 'Usuario',
      selector: (row) =>
      row.userId === null? 'Sin usuario': row.userId.name + ' ' + row.userId.lastname,      
      sortable: true,
      width: '120px',
    },
    {
      name: 'F.Registro',
      selector: (row) => `${momentjs(row.createdAt).format('DD-MM-YYYY')}`,
      sortable: true,
      width: '120px',
    },
    {
      name: 'T Pago',
      selector: (row) => row.typePayment == 'transfer'?
      'Transferencia'
      : row.typePayment    == 'efective'?
      'Efectivo'
      :'',
      sortable: true,
      width: '120px',

    },
    {
      name: 'Inscripciones',
      selector: (row) => (getInscriptionstitle(row.inscriptions)),
      sortable: true,
      width: '170px',
    },
    {
      name: 'Total',
      selector: (row) => `$ ${row.total}`,
      sortable: true,
      width: '130px',
    },

    {
      name: 'Estado',
      selector: (row) => row.status == 'paid'?
      'Pagado'
      : row.status == 'pending'?
      'Pendiente'
      :row.status == 'reject'?
      'Rechazado':
      '',
      sortable: true,
      width: '130px',
    },

    {
      name: 'Acciones',
      cell: (register) => (
        <div>
           <td className='padding_td options'>
          {/* <button onClick={getregisterapi()} className='btn btn-success p-1'>
          </button> */}
            <button onClick={()=> updateregister(register.status, register._id)} className='btn btn-success p-1 left'>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
            <button onClick={()=> cancelregister(register.status, register._id)} className='btn btn-danger p-1 left'>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <button
             
              disabled={register.voucherURL=== null}
              onClick={()=>ver(register.voucherURL)}
              className={register.voucherURL === null? 'btn btn-secondary p-1 left':'btn btn-primary p-1 left'}
              data-toggle='modal'
              data-target='exampleModal'>
       
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
          </td>
          {/* <Link to={`/editCourse/${curso?._id}`}>
            <BiEdit className='fs-4 btn btn-success' />
          </Link> */}
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '200px',
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: '15px',
      },
    },
    pagination: {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gap: '10px',
        alignItems: 'center',
        marginTop: '10px',
      },
    },
  };


  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };


  return (
    <div className='content_base'>
      <Sidebar></Sidebar>
      <div className=' contentwithoutsidebar'>
        <h1 className='mb-1'>
          Registros <FontAwesomeIcon icon={faFolder} />{' '}
        </h1>
        <div className='mt-2 mb-2 col-sm-4'>
              <input
                onChange={searchByDni}
                type='text'
                className='form-control p-2'
                placeholder='Buscar por Cedula'
              />
            </div>
            {/* <td className='padding_td'>
             {
              typePayment == 'transfer'?
              'transferencia'
              : typePayment    == 'efective'?
              'Efectivo'
              :''
              }
          </td> */}
            {dnifilter.length > 0 ? (
              <DataTable
                columns={columns}
                striped
                highlightOnHover
                selectableRowsComponent={() => <div></div>}
                fixedHeader
                data={dnifilter}
                customStyles={customStyles}
                selectableRows
                pagination
                paginationComponentOptions={paginationComponentOptions}
              />
            ) : (
              <DataTable />
            )}
        {/* <div className='table_contenct'>
          <table className='table forceo'>
            <thead className='header_dark'>
              <tr>
                <th className='paddin_table' scope='col'>
                  T. Pago
                </th>
                <th className='paddin_table' scope='col'>
                  Registro
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
        </div> */}
      </div>
      {/* {renderPagination()} */}
    </div>
  );
};
