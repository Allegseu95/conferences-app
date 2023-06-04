import { see } from '../../helpers/sweetAlert';

export const CardCertificateUser = ({ certificate = null }) => {
  const mostrarCertificado = () => {
    see('', 'https://www.ejemplode.com/images/uploads/voucher.jpg', '90%', '500px', '900px');
  };

  return (
    <div className='col'>
      <div className='card bg-light m-2'>
        <div className='card-body'>
          <div className='d-block'>
            <h5 className='card-title m-2 text-dark'>
              <b className='fs-6'>Titulo:</b>
              <span className='fs-6'> {certificate.title  ?? ''}</span>
            </h5>
            <h5 className='card-title m-2 text-dark'>
              <b className='fs-6'>Asistencia:</b>{' '}
              <span className='fs-6'>{certificate.asistencia}</span>
            </h5>
          </div>
          <div className='d-block m-1'>
            <button onClick={mostrarCertificado} className='btn btn-info m-1 p-1'>
              Ver Certificado
            </button>
            <button className='btn btn-success m-1 p-1'>Descargar Certificado</button>
          </div>
        </div>
      </div>
    </div>
  );
};
