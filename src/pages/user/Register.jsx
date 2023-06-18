import QRCode from 'qrcode.react';
import { useServer } from '@/contexts/ServerContext';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useLoader } from '@/contexts/LoaderContext';
import estampa from '@/assets/images/react.png';
import { upperFirstWord } from '@/helpers/utils'
import html2canvas from 'html2canvas';

export const Register = () => {
  const [allRegisters, setAllRegisters] = useState([]);
  const server = useServer();
  const { showLoader, hideLoader } = useLoader();

  const getAllRegisterByUer = async () => {
    showLoader();
    try {
      const register = await server.GetAllRegisterByUser();
      console.log(register)
      setAllRegisters(register);
    } catch (error) {
      setAllRegisters([]);
    } finally {
      hideLoader();
    }
  };

  const downloadScrollableDivAsImage = async () => {
    try {
      const screen = document.getElementById('card');
      const canvas = await html2canvas(screen);
      const base64 = canvas.toDataURL('image/png');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', base64);
      anchor.setAttribute('download', 'registro.png');
      anchor.click();
    } catch (error) {
      console.log('Error al descargar la imagen:', error);
    }
  };

  useEffect(() => {
    getAllRegisterByUer();
  }, []);

  return (
    <div className='contenedor-registro'>
      <div>
        <h4 className='text-center mt-4 text-white'>
          <b>Registros</b>
        </h4>
      </div>
      <div>
        <div className='row row-cols-1 row-cols-md-2 mt-3 m-2'>
          {allRegisters?.map?.length > 0 ? (
            allRegisters.map((registro) => {
              return (
                <div className='card col-sm-5 m-2' id='card' key={registro?._id}>
                  <div className='text-center'>
                    <h2 className='fs-4'>
                      {registro.inscriptions.map((titulo) => titulo.courseId.title)}
                    </h2>
                  </div>
                  <div className='mt-2' style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <div className='text-center'>
                      <div className='row row-cols-3 row-cols-sm-3'>
                        <div className='col'>
                          <img
                            src={estampa}
                            alt='estampa'
                            style={{ height: '70px', width: '70px', borderRadius: '100%' }}
                          />
                        </div>
                        <div className='col'>
                          <img
                            src={estampa}
                            alt='estampa'
                            style={{ height: '70px', width: '70px', borderRadius: '50%' }}
                          />
                        </div>
                        <div className='col'>
                          <img
                            src={estampa}
                            alt='estampa'
                            style={{ height: '70px', width: '70px', borderRadius: '50%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row row-cols-1 row-cols-lg-3 register-card'>
                    <div className='col-lg-4 mt-4 m-4'>
                      <div className='centrar-qr'>
                        <QRCode
                          value={registro?.qr}
                          size={200}
                          fgColor='#000000'
                          bgColor='#FFFFFF'
                        />
                      </div>
                      <div className='mt-1'>
                        <h5 className='card-title fs-6'>
                          Estado:{' '}
                          <span
                            className={`fs-6 ${
                              registro?.status === 'reject'
                                ? 'text-danger'
                                : registro?.status === 'paid'
                                ? 'text-success'
                                : registro?.status === 'pending'
                                ? 'text-warning'
                                : ''
                            }`}>
                            {registro?.status === 'reject'
                              ? 'Rechazado'
                              : registro?.status === 'paid'
                              ? 'Pagado'
                              : registro?.status === 'pending'
                              ? 'Pendiente'
                              : ''}
                          </span>
                        </h5>
                        <h5 className='card-title fs-6 mt-2'>
                          Fecha:{' '}
                          <span className='fs-6 text-success'>
                            {registro?.createdAt
                              ? moment(registro?.createdAt).format('DD/MM/YYYY')
                              : ''}
                          </span>
                        </h5>
                        <h5 className='card-title fs-6 mt-2'>
                          Total: <span className='fs-6 text-success'>{`$${registro?.total}`}</span>
                        </h5>
                        <h5 className='card-title fs-6 mt-2'>
                          Tipo de pago:{' '}
                          <span className='fs-6 text-success'>
                            {registro?.typePayment === 'transfer'
                              ? ' transferencia'
                              : registro?.typePayment === 'efective'
                              ? 'efectivo'
                              : ''}
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className='mt-4 col-lg-6'>
                      <ul className='text-center p-2'>
                        <li>
                          <b>Talleres</b>
                        </li>
                        {registro?.inscriptions?.length > 0 ? (
                          registro.inscriptions.map((curso) => {
                            return <li key={curso._id}>{curso.courseId?.type}</li>;
                          })
                        ) : (
                          <li>No hay talleres</li>
                        )}
                      </ul>
                      <div className='mt-4'>
                        <h4 className='fs-6'>
                          {' '}
                          <b>Nombre:</b>{' '}
                          <span>
                            {upperFirstWord(registro?.userId?.name) +
                              ' ' +
                              upperFirstWord(registro?.userId?.lastname)}
                          </span>
                        </h4>
                      </div>
                      <button
                        id='descargar'
                        onClick={() => downloadScrollableDivAsImage()}
                        className='btn btn-success p-2 mt-2 col-12 mb-2'>
                        Descargar Registro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='card'>
              <h3>no existe registro de talleres y comgresos</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
