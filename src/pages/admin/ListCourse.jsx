import React from 'react';
import DataTable from 'react-data-table-component';
import { useServer } from '@/contexts/ServerContext';
import { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillEye, AiFillSafetyCertificate } from 'react-icons/ai';
import '@/static/base/base.css';
import { Sidebar } from '@/pages/admin/sidebar';
import { see } from '@/helpers/sweetAlert';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { MdAddToPhotos } from 'react-icons/md';
import { BsFillPinFill } from 'react-icons/bs';
import { useLoader } from '@/contexts/LoaderContext';

export const ListCourse = () => {
  const server = useServer();
  const { showLoader, hideLoader } = useLoader();
  const [courses, setCourses] = useState([]);
  const [titleFilter, setTitleFilter] = useState(courses);

  const getCourses = async () => {
    showLoader();
    try {
      const data = await server.getCourses();
      setCourses(data);
      setTitleFilter(data);
    } catch (error) {
      setCourses([]);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const seePhoto = (photo) => {
    see('Imagen Curso', photo, '90%', '400px', '700px');
  };

  const seeCertificado = (certificate) => {
    see('Imagen Certificado', certificate, '90%', '400px', '700px');
  };

  const columns = [
    {
      name: 'Título',
      selector: (row) => row.title,
      sortable: true,
      width: 'auto',
    },
    {
      name: 'Tipo',
      selector: (row) =>
        row.type === 'workshop' ? 'Taller' : row?.type === 'congress' ? 'Congreso' : '',
      sortable: true,
      width: '100px',
    },
    {
      name: 'Precio',
      selector: (row) => `$ ${row.price.toLocaleString()}`,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Descripción',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Fecha Inicio',
      selector: (row) => (row?.startDate ? moment(row?.startDate).format('DD/MM/YYYY') : ''),
      sortable: true,
      width: '100px',
    },
    {
      name: 'Fecha Fin',
      selector: (row) => (row.endDate ? moment(row.endDate).format('DD/MM/YYYY') : ''),
      sortable: true,
      width: '100px',
    },

    {
      name: 'Acciones',
      cell: (curso) => (
        <div>
          <AiFillSafetyCertificate
            onClick={() => (curso?.photoURL ? seePhoto(curso?.photoURL) : {})}
            className={`fs-4 btn m-1 ${curso?.photoURL ? 'btn-warning' : 'btn-secondary'}`}
          />
          <AiFillEye
            onClick={() =>
              curso?.certificateTemplateURL ? seeCertificado(curso?.certificateTemplateURL) : {}
            }
            className={`fs-4 m-2 btn ${
              curso?.certificateTemplateURL ? 'btn-info' : 'btn-secondary'
            }`}
          />
          <Link to={`/editCourse/${curso?._id}`}>
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

  const searchByTitle = (event) => {
    const filterTitle = courses.filter((curso) => {
      return curso.title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setTitleFilter(filterTitle);
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          <h1 className='mb-2 fs-4 text-center'>
            Cursos Disponibles <BsFillPinFill />
          </h1>
          <Link to='/crear-curso' className='btn btn-success p-3'>
            <MdAddToPhotos className='fs-4' /> Crear Curso
          </Link>
          <div className='selector-items'>
            <div className='mt-2 mb-2 col-sm-4'>
              <input
                onChange={searchByTitle}
                type='text'
                className='form-control p-2'
                placeholder='Buscar por titulo'
              />
            </div>
            {titleFilter.length > 0 ? (
              <DataTable
                columns={columns}
                striped
                highlightOnHover
                selectableRowsComponent={() => <div></div>}
                fixedHeader
                data={titleFilter}
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
