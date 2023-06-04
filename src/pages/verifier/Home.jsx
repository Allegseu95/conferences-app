import React, { Fragment, useState, useRef, useEffect } from 'react';
import QrReader from 'react-qr-reader';

import { useAuth } from '@/contexts/AuthContext';

import { Footer } from '@/components/Footer';

export const HomePage = ({}) => {
  const videoRef = useRef(null);
  const { user, authLogout } = useAuth();

  const [widthScan, setWidthScan] = useState('w-50');
  const [activeScan, setActiveScan] = useState(false);
  const [qrResult, setQrResult] = useState('');

  const handleError = (error) => {
    console.log(error);
  };

  const handleScan = (data) => {
    if (data) {
      console.log('data', data);
      try {
        const obj = JSON.parse(data);
        console.log('obj', obj);
      } catch (error) {
        console.log('error', error);
      }
      setQrResult(data);
      setActiveScan(false);
    }
  };

  const handleLoad = (data) => {
    console.log('data', data);
  };

  const data = {
    registerId: '647bbe4ac574c6509a1a42ca',
    status: 'paid',
    inscriptions: ['647bbe4ac574c6509a1a42cb', '647bbe4ac574c6509a1a42cc'],
  };

  const demo = () => {
    const jsonString = JSON.stringify(data);
    console.log(jsonString);
  };

  // useEffect(() => {
  //   alert('asd');
  //   // Verificar si la API getUserMedia está disponible en el navegador
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

  useEffect(() => {
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   // Permiso de cámara solicitado
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then(function (stream) {
    //       // La cámara está habilitada, puedes mostrar el stream en un elemento de video
    //       var videoElement = document.getElementById('videoElement');
    //       videoElement.srcObject = stream;
    //     })
    //     .catch(function (error) {
    //       // Ocurrió un error o el usuario denegó el permiso de cámara
    //       console.log('Error al acceder a la cámara: ', error);
    //     });
    // } else {
    //   // El navegador no admite la API de MediaDevices
    //   console.log('La API de MediaDevices no está disponible');
    // }
    setWidthScan(window.innerWidth <= 576 ? 'w-100' : 'w-50');
  }, []);

  const requestCameraAccess = async () => {
    try {
      // Pedir permiso para acceder a la cámara
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Mostrar el video de la cámara en un elemento HTML
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      // Ocurrió un error al acceder a la cámara
      console.error('Error al acceder a la cámara:', error);
    }
  };

  return (
    <div className='min-vh-100 d-flex justify-content-space-between flex-column'>
      <div className=' row bg-dark w-100 text-light p-2'>
        <div className='col-lg-10 col-md-10 col-sm-10 col-12 d-flex justify-content-center align-items-center'>
          <h2 className='p-1 ps-lg-5 '>
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
        {activeScan && (
          <Fragment>
            <div className={`border border-success border-2 ${widthScan}`}>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                onLoad={handleLoad}
                // facingMode='user'
              />
            </div>
            <button
              className='btn btn-danger mt-3 py-2 px-3 rounded-pill'
              onClick={() => setActiveScan(false)}>
              Cancelar
            </button>
          </Fragment>
        )}
        {!activeScan && (
          <button
            className='btn btn-info py-2 px-3 rounded-pill'
            onClick={() => setActiveScan(true)}>
            Escanear Asistencia
          </button>
        )}
        <div>{qrResult}</div>
      </div>

      <Footer />
    </div>
  );
};
