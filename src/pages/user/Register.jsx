import QRCode from 'qrcode.react';
import './registermobil.css'
export const Register = () => {

  const textToEncode = 'Ejemplo de texto para el código QR';
  return (
    <div className='container-register'>
      <h4 className='text-center mt-2 text-white'>
        <b>Registros</b>
      </h4>
      <div className='contenedor-register-movil d-flex'>
        <div className='qr-code m-3 text-center'>
          <QRCode
            className='m-2'
            value={textToEncode}
            size={300}
            fgColor='#000000'
            bgColor='#FFFFFF'
          />
        </div>
        <div className='register-qr mt-4'>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='card border-success bg-dark'>
            <div className='card-body'>
              <div className='d-block m-2'>
                <h5 className='card-title m-2 text-white'>
                  <b className='fs-6'>Taller:</b>
                  <span className='fs-6'>
                    {' '}
                    Avances en el tratamiento de enfermedades cardiovasculares
                  </span>
                </h5>
                <h5 className=' m-2 text-white'>
                  <b className='fs-6'>Monto:</b> <span className='text-success fs-6'>30$</span>
                </h5> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
