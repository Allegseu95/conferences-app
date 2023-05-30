import '@/static/styles/layout.css'
export const Profile = () => {
  return (
    <div>
      <h4 className='text-center text-white mt-4'>
        <b>Perfil de Usuario</b>
      </h4>
      <div className='m-3 alert alerta alert-info mt-4 p-2' role='alert'>
        Hola te damos la bienvenida Usuario
      </div>
      <div className='alerta card m-3 mt-4'>
        <div className='card-header m-1'>Informacion Personal</div>
        <div className='card-body'>
          <div className='row row-cols-1 row-cols-md-2 mt-2'>
            <div className='col'>
              <h5 className='text-dark m-1'>
                <b className='fs-5'>Nombre:</b>{' '}
                <span className='fs-5'>Rommel Santiago Palma Plua</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b className='fs-5'>Direccion:</b>{' '}
                <span className='fs-5'>Manta - Ciudadela Universitaria</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b className='fs-5'>Empresa/Institucion:</b>{' '}
                <span className='fs-5'>Universidad Laica Eloy Alfaro de Manabi</span>
              </h5>
            </div>
            <div className='col'>
              <h5 className='text-dark m-1'>
                <b className='fs-5'>Telefono:</b> <span className='fs-5'>096772155</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b className='fs-5'>Cedula:</b> <span className='fs-5'>2300544312</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b className='fs-5'>Email:</b> <span className='fs-5'>ejemplo@gmail.com</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};