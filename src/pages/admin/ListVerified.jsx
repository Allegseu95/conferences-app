import DataTable from 'react-data-table-component';
import { useServer } from '@/contexts/ServerContext';
import { useState, useEffect } from 'react';
import { showPasswordInput } from '@/helpers/sweetAlert';
import { Link } from 'react-router-dom';
import { useLoader } from '@/contexts/LoaderContext';
import { Sidebar } from './sidebar';
import { BiEdit } from 'react-icons/bi';
import { GoVerified } from 'react-icons/go';
import { MdAddToPhotos } from 'react-icons/md';
import { MdPassword } from 'react-icons/md';

import '@/static/base/base.css';
import { data } from '@/mock/verified';

export const ListVerified = () => {
  const [identificationFilter, setIdentificationFilter] = useState(data);

  
  const handlePasswordEntered = (password) => {
    // Realiza alguna acción con la contraseña ingresada
    console.log(`Entered password: ${password}`);
  };
  const columns = [
    {
      name: 'Cedula',
      selector: (row) => row.identification,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Nombre',
      selector: (row) => row.name,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Apellido',
      selector: (row) => row.lastname,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Celular',
      selector: (row) => row.phone,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Direccion',
      selector: (row) => row.address,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Solicitud para recuperar contraseña',
      selector: (row) => row.solPassword,
      sortable: true,
      width: '200px',
    },

    {
      name: 'Acciones',
      cell: (row) => (
        <div>
          <MdPassword
            className='fs-4 btn btn-warning mx-2'
            onClick={() => showPasswordInput(handlePasswordEntered)}
          />
          <Link to={`/editVerified/${row?.id}`}>
            <BiEdit className='fs-4 btn btn-success' />
          </Link>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '150px',
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
        gap: '20px',
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

  const searchByIdentification = (event) => {
    const searchTerm = event.target.value;
    const filterIdentification = data.filter((row) => {
      const tenDigits = row.identification.slice(0, 10);
      return tenDigits.includes(searchTerm);
    });

    setIdentificationFilter(filterIdentification);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          <h1 className='mb-2 fs-4 text-center'>
            Lista de Verificadores <GoVerified className='text-success' />
          </h1>
          <div className='selector-items'>
            <Link to='/crear-verificador' className='btn btn-success p-3'>
              <MdAddToPhotos className='fs-4' /> Crear Verificador
            </Link>
            <div className='mt-2 mb-2 col-sm-4 d-flex'>
              <input
                onChange={searchByIdentification}
                type='text'
                className='form-control p-2'
                placeholder='Buscar por cedula'
              />
            </div>
            {identificationFilter.length > 0 ? (
              <DataTable
                columns={columns}
                striped
                highlightOnHover
                selectableRowsComponent={() => <div></div>}
                fixedHeader
                data={identificationFilter}
                customStyles={customStyles}
                selectableRows
                pagination
                paginationComponentOptions={paginationComponentOptions}
              />
            ) : (
              <DataTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
