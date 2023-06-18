import React, { Fragment, useState, useRef, useEffect } from 'react';
import QrReader from 'react-qr-reader';

import { useAuth } from '@/contexts/AuthContext';

import { Footer } from '@/components/Footer';

import { showBasicAlert } from '@/helpers/sweetAlert';

import { registerQRFake } from '@/mock/registerQR';

export const HomePage = ({}) => {
  // const videoRef = useRef(null);
  const { user, authLogout } = useAuth();

  const [widthScan, setWidthScan] = useState('w-50');
  const [viewMode, setViewMode] = useState('home');
  const [data, setData] = useState(null);

  const handleError = (error) => {
    showBasicAlert('Ocurrio un problema! Intentelo más tarde', 'error');
    console.log('Error de escaner!', error);
  };

  const handleScan = (data) => {
    if (data) {
      console.log('data', data);
      setViewMode('data');
      setData(registerQRFake);
    }
  };

  // useEffect(() => {
  //   if (navigator?.mediaDevices && navigator?.mediaDevices?.getUserMedia) {
  //     // Pedir permiso para acceder a la cámara
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true })
  //       .then(function (stream) {
  //         // Mostrar el video de la cámara en un elemento HTML
  //         if (videoRef.current) {
  //           videoRef.current.srcObject = stream;
  //           videoRef.current.play();
  //         }
  //       })
  //       .catch(function (error) {
  //         // Ocurrió un error al acceder a la cámara
  //         console.error('Error al acceder a la cámara:', error);
  //       });
  //   } else {
  //     alert('no');
  //   }
  // }, []);

  const homeView = () => setViewMode('home');

  const registerAsistence = (inscriptionId) => {
    console.log('data to register', { registerId: data?._id, inscriptionId });
    showBasicAlert('Asistencia Confirmada!', 'success');
    homeView();
    setData(null);
  };

  useEffect(() => {
    setWidthScan(window.innerWidth <= 576 ? 'w-100' : 'w-50');
  }, []);

  return (
    <div className='min-vh-100 d-flex justify-content-space-between flex-column'>
      <div className=' row bg-dark w-100 text-light p-2'>
        <div className='col-lg-10 col-md-10 col-sm-10 col-12 d-flex justify-content-center align-items-center'>
          <h2 className='p-1 ps-lg-5 text-center'>
            Bienvenido {user?.name ?? ''} {user?.lastname ?? ''}
          </h2>
        </div>

        <div className='col-lg-2 col-md-2 col-sm-2 col-12 d-flex justify-content-center align-items-center'>
          <button className='btn btn-outline-danger p-2' onClick={() => authLogout()}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div
        style={{ flex: 1 }}
        className='d-flex justify-content-center flex-column align-items-center'>
        {viewMode === 'home' && (
          <button
            className='btn btn-info py-2 px-3 rounded-pill'
            onClick={() => setViewMode('scan')}>
            Escanear Asistencia
          </button>
        )}

        {viewMode === 'scan' && (
          <Fragment>
            <div className={`border border-success border-2 ${widthScan}`}>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                onLoad={(data) => console.log('handleLoad', data)}
              />
            </div>
            <button
              className='btn btn-danger mt-3 py-2 px-3 rounded-pill'
              onClick={() => homeView()}>
              Cancelar
            </button>
          </Fragment>
        )}

        {viewMode === 'data' && (
          <div className='card'>
            <div className='card-header p-2 text-center bg-dark text-light'>
              {data?.userId?.name} {data?.userId?.lastname}
            </div>

            <ul className='list-group list-group-flush'>
              {data?.inscriptions.map((item, index) => (
                <li
                  key={index}
                  className='list-group-item p-2'
                  style={{ cursor: 'pointer' }}
                  onClick={() => registerAsistence(item?._id)}>
                  {item?.courseId?.title}
                </li>
              ))}
            </ul>

            <div
              class={`card-footer text-center p-1 fw-bold ${
                data?.status === 'reject'
                  ? 'text-danger'
                  : data?.status === 'paid'
                  ? 'text-success'
                  : data?.status === 'pending'
                  ? 'text-warning'
                  : ''
              }`}>
              {data?.status === 'paid'
                ? 'Pagado'
                : data?.status === 'reject'
                ? 'Pago Rechazado'
                : data?.status === 'pending'
                ? 'Pago Pendiente'
                : ''}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
