import { see } from '@/helpers/sweetAlert';
import { useServer } from '@/contexts/ServerContext';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useLoader } from '@/contexts/LoaderContext';

export const Certificate = () => {
  const [allCertificates, setAllCertificates] = useState([]);
  const server = useServer();
  const { showLoader, hideLoader } = useLoader();

  const mostrarCertificado = (photo) => {
    see('', photo, '90%', '500px', '900px');
  };

  const downloadCertificate = (photoURL) => {
    fetch(photoURL)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'certificado.png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log('Error al descargar el certificado:', error);
      });
  };

  const getAllCertificatesByUer = async () => {
    showLoader();
    try {
      const register = await server.GetAllRegisterByUser();
      setAllCertificates(register);
    } catch (error) {
      setAllRegisters([]);
      console.log(error);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    getAllCertificatesByUer();
  }, []);

  return (
    <div className='justificar-contenedor-certificado mt-4'>
      <h4 className='text-center mt-2 text-white'>
        <b>Certificados</b>
      </h4>

      <div className='row row-cols-1 row-cols-md-3 m-4'>
        {allCertificates
          ?.filter((certificado) =>
            certificado.inscriptions.some((inscripcion) => inscripcion.attendanceDate !== null)
          )
          .map((certificado) => {
            return (
              <div key={certificado._id} className='col'>
                <div className='card bg-light m-2'>
                  <div className='card-body'>
                    {certificado?.inscriptions.map((certificado) => {
                      return (
                        <div key={certificado._id} className='d-block'>
                          <h5 className='card-title m-2 text-dark'>
                            <b className='fs-6'>Titulo:</b>
                            <span className='fs-6'> {certificado?.courseId?.title}</span>
                          </h5>
                          <h5 className='card-title m-2 text-dark'>
                            <b className='fs-6'>Asistencia:</b>{' '}
                            <span className='fs-6'>
                              {certificado?.attendanceDate
                                ? moment(certificado?.attendanceDate).format('DD/MM/YYYY')
                                : ''}
                            </span>
                          </h5>
                        </div>
                      );
                    })}
                    {certificado?.inscriptions.map((imagen) => {
                      return (
                        <div key={imagen._id} className='d-block m-1'>
                          {imagen?.courseId.certificateTemplateURL ? (
                            <button
                              onClick={() =>
                                mostrarCertificado(imagen?.courseId?.certificateTemplateURL)
                              }
                              className='btn btn-info m-1 p-1'>
                              Ver Certificado
                            </button>
                          ) : (
                            <div className='btn btn-secondary m-1 p-1'>No hay imagen</div>
                          )}

                          {imagen?.courseId?.certificateTemplateURL ? (
                            <button
                              className='btn btn-success m-1 p-1'
                              onClick={() =>
                                downloadCertificate(imagen?.courseId?.certificateTemplateURL)
                              }>
                              Descargar Certificado
                            </button>
                          ) : (
                            <div className={'btn btn-secondary m-1 p-1'}>No hay imagen</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {allCertificates?.inscriptions?.filter((inscripcionLlena) => {
        const filtrar = inscripcionLlena?.courseId?.attendanceDate !== null;
      }).length === 0 && (
        <div
          className='card text-center bg-info'
          style={{ height: '50px', marginLeft: '20px', marginRight: '20px' }}>
          <h2> No hay certificados por que no tiene una asistencia</h2>
        </div>
      )}
    </div>
  );
};
