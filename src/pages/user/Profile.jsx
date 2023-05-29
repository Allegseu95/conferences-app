import './profilemovil.css'

export const Profile = () => {
  return (
    <div className='container-pro'>
      <h4 className='text-center text-white mt-4'>
        <b>Perfil de Usuario</b>
      </h4>
      <div className='container-info alert alert-info mt-4 p-2' role='alert'>
        Hola te damos la bienvenida Usuario
      </div>
      <div className='row row-cols-1 row-cols-md-2 mt-5'>
        <div className='col'>
          <h5 className='text-dark m-2'>
            <b>Nombres:</b> <span>Rommel Santiago Palma Plua</span>
          </h5>
          <h5 className='text-dark mt-3 m-2'>
            <b>Direccion:</b> <span>Manta - Ciudadela Universitaria</span>
          </h5>
          <h5 className='text-dark mt-3 m-2'>
            <b>Empresa/Institucion:</b> <span>Universidad Laica Eloy Alfaro de Manabi</span>
          </h5>
        </div>
        <div className='col'>
          <h5 className='text-dark m-2'>
            <b>Telefono:</b> <span>096772155</span>
          </h5>
          <h5 className='text-dark mt-3 m-2'>
            <b>Cedula:</b> <span>2300544312</span>
          </h5>
        </div>
      </div>
    </div>
  );
};