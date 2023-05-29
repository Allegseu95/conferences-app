export const Profile = () => {
  return (
    <div>
      <h4 className='text-center text-white mt-4'>
        <b>Perfil de Usuario</b>
      </h4>
      <div className='m-3 alert alert-info mt-4 p-2' role='alert'>
        Hola te damos la bienvenida Usuario
      </div>
      <div className='card m-3 mt-4'>
        <div className='card-header m-1'>Informacion Personal</div>
        <div className='card-body'>
          <div className='row row-cols-1 row-cols-md-2 mt-2'>
            <div className='col'>
              <h5 className='text-dark m-1'>
                <b>Nombres:</b> <span>Rommel Santiago Palma Plua</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b>Direccion:</b> <span>Manta - Ciudadela Universitaria</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b>Empresa/Institucion:</b> <span>Universidad Laica Eloy Alfaro de Manabi</span>
              </h5>
            </div>
            <div className='col'>
              <h5 className='text-dark m-1'>
                <b>Telefono:</b> <span>096772155</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b>Cedula:</b> <span>2300544312</span>
              </h5>
              <h5 className='text-dark mt-3 m-1'>
                <b>Email:</b> <span>ejemplo@gmail.com</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};