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
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { MdAddToPhotos } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Lista = () => {
  const server = useServer();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const data = await server.getCourses();
      setCourses(data);
    } catch (error) {
      console.log(error);
      setCourses([]);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const getCurrentCourses = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return courses.slice(indexOfFirstItem, indexOfLastItem);
  };

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
      width: '300px',
    },
    {
      name: 'Tipo',
      selector: (row) =>
        row.type === 'workshop' ? 'Taller' : row?.type === 'congress' ? 'Congreso' : '',
      sortable: true,
      width: '150px',
    },
    {
      name: 'Precio',
      selector: (row) => `$ ${row.price.toLocaleString()}`,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Descripción',
      selector: (row) => row.description,
      sortable: true,
      width: '300px',
    },
    {
      name: 'Fecha Inicio',
      selector: (row) => (row?.startDate ? moment(row?.startDate).format('DD/MM/YYYY') : ''),
      sortable: true,
    },
    {
      name: 'Fecha Fin',
      selector: (row) => (row.endDate ? moment(row.endDate).format('DD/MM/YYYY') : ''),
      sortable: true,
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
    
  };

  const pagination = {
    pagination: {
      marginTop: '20px',
      color: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />

      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          <h1 className='mb-2 fs-4'>
            Usuarios Registrados <FontAwesomeIcon icon={faUsers} />
          </h1>
          <Link to='/crear-curso' className='btn btn-success p-3'>
            <MdAddToPhotos className='fs-4' /> Crear Curso
          </Link>
          <div className='mt-2'>
            <div className='text-dark'></div>
            {courses.length > 0 && (
              <DataTable
                columns={columns}
                striped
                highlightOnHover
                fixedHeader
                selectableRows
                data={getCurrentCourses()}
                customStyles={customStyles}
                pagination
                
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
