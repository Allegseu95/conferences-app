import QRCode from 'qrcode.react';

export const Register = () => {
  const textToEncode = 'Ejemplo de texto para el código QR';

  return (
    <div>
      <h4 className='text-center mt-4 text-white'>
        <b>Registros</b>
      </h4>
      <div className='m-4 mt-4'>
        <div className='row '>
          <div className='col'>
            <div className='card m-1'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center mt-2 m-3'>
                    <QRCode value={textToEncode} size={200} fgColor='#000000' bgColor='#FFFFFF' />
                  </div>
                </div>
                <div className='col'>
                  <div className='card-body mt-2'>
                    <h5 className='card-title fs-6 m-1'>
                      Estado: <span className='fs-6 text-success'>Pagado</span>
                    </h5>
                    <h5 className='card-title fs-6 m-1'>
                      Fecha: <span className='fs-6 text-success'>00/00/0000</span>
                    </h5>
                    <h5 className='card-title fs-6 m-1'>
                      Total: <span className='fs-6 text-success'>30$</span>
                    </h5>
                    <h5 className='card-title fs-6 m-1'>
                      Tipo de pago: <span className='fs-6 text-success'>Transferencia</span>
                    </h5>
                  </div>
                </div>
                <div className='row text-center'>
                  <div className='col-sm-6'>
                    <ul className='list-group list-group-flush'>
                      <li className='m-1 list-group-item'>
                        <b>Talleres</b>
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-6'>
                    <ul className='list-group list-group-flush'>
                      <li className='m-1 list-group-item'>
                        <b>Talleres</b>
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                      <li className='m-1'>
                        Avances en el tratamiento de enfermedades cardiovasculares
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
