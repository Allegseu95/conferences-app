import QRCode from 'qrcode.react';
import '@/static/styles/layout.css'
export const Register = () => {
  const textToEncode = 'Ejemplo de texto para el código QR';

  return (
    <div>
      <h4 className='text-center mt-4 text-white'>
        <b>Registros</b>
      </h4>
      <div className='row row-cols-1 row-cols-lg-2 m-4'>
        <div className='row justify-content-center mt-4 p-3'>
          <div className='col-sm-5 bg-light'>
            <div className='card-body'>
              <div className='mt-2 m-4 centrar-qr'>
                <QRCode value={textToEncode} size={200} fgColor='#000000' bgColor='#FFFFFF' />
              </div>
              <div className='mt-2 m-4'>
                <h5 className='card-title fs-6'>
                  Estado: <span className='fs-6 text-success'>Pagado</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Fecha: <span className='fs-6 text-success'>00/00/0000</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Total: <span className='fs-6 text-success'>30$</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Tipo de pago: <span className='fs-6 text-success'>Transferencia</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-sm-7 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-2'>
                <ul className='list-group list-group-flush'>
                  <li>
                    <b>Talleres</b>
                  </li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-4 p-3'>
          <div className='col-sm-5 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-4 centrar-qr'>
                <QRCode value={textToEncode} size={200} fgColor='#000000' bgColor='#FFFFFF' />
              </div>
              <div className='mt-2 m-4'>
                <h5 className='card-title fs-6'>
                  Estado: <span className='fs-6 text-success'>Pagado</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Fecha: <span className='fs-6 text-success'>00/00/0000</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Total: <span className='fs-6 text-success'>30$</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Tipo de pago: <span className='fs-6 text-success'>Transferencia</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-sm-7 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-2'>
                <ul className='list-group list-group-flush'>
                  <li>
                    <b>Talleres</b>
                  </li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-4 p-3'>
          <div className='col-sm-5 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-4 centrar-qr'>
                <QRCode value={textToEncode} size={200} fgColor='#000000' bgColor='#FFFFFF' />
              </div>
              <div className='mt-2 m-4'>
                <h5 className='card-title fs-6'>
                  Estado: <span className='fs-6 text-success'>Pagado</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Fecha: <span className='fs-6 text-success'>00/00/0000</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Total: <span className='fs-6 text-success'>30$</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Tipo de pago: <span className='fs-6 text-success'>Transferencia</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-sm-7 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-2'>
                <ul className='list-group list-group-flush'>
                  <li>
                    <b>Talleres</b>
                  </li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-4 p-3'>
          <div className='col-sm-5 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-4 centrar-qr'>
                <QRCode value={textToEncode} size={200} fgColor='#000000' bgColor='#FFFFFF' />
              </div>
              <div className='mt-2 m-4'>
                <h5 className='card-title fs-6'>
                  Estado: <span className='fs-6 text-success'>Pagado</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Fecha: <span className='fs-6 text-success'>00/00/0000</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Total: <span className='fs-6 text-success'>30$</span>
                </h5>
                <h5 className='card-title fs-6 mt-2'>
                  Tipo de pago: <span className='fs-6 text-success'>Transferencia</span>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-sm-7 bg-light '>
            <div className='card-body'>
              <div className='mt-2 m-2'>
                <ul className='list-group list-group-flush'>
                  <li>
                    <b>Talleres</b>
                  </li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                  <li>Avances en el tratamiento de enfermedades cardiovasculares</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
