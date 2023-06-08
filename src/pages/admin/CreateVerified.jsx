import { GoVerified } from 'react-icons/go';
import { Sidebar } from './sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVerified } from '@/helpers/constants';

export const CreateVerified = () => {
  const [form, setForm] = useState(createVerified);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    e.preventDefault()
  }
  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          <h1 className='mb-2 fs-4 text-center'>
            Crear Verificador <GoVerified className='text-success' />
          </h1>
          <div className='mt-3'>
            <form className='row g-3' onSubmit={handleSubmit}>
              <div className='col-md-4 p-2'>
                <label className='form-label'>Nombre</label>
                <input
                  type='text'
                  placeholder='Escriba un titulo'
                  className='form-control p-2'
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Apellido</label>
                <input
                  type='text'
                  placeholder='Escriba sus apellidos'
                  onChange={(e) => {
                    setForm({ ...form, lastname: e.target.value });
                  }}
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Telefono</label>
                <input
                  placeholder='Escriba su telefono movil'
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                  }}
                  type='text'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Email</label>
                <input
                  placeholder='Escriba un correo'
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                  type='email'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Direccion</label>
                <input
                placeholder='Direccion'
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                  }}
                  type='text'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Cedula</label>
                <input
                  placeholder='Escriba su cedula'
                  onChange={(e) => {
                    setForm({ ...form, identification: e.target.value });
                  }}
                  type='email'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Contraseña</label>
                <input
                  placeholder='Contraseña'
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                  type='password'
                  className='form-control p-2'
                />
              </div>
              <div>
                <button
                  type='submit'
                  //onClick={() => crearCurso()}
                  className='btn btn-success p-2 col-2 mt-4 m-2'>
                  Crear
                </button>
                <button
                  type='submit'
                  onClick={() => navigate('/lista-verificados')}
                  className='btn btn-danger p-2 col-2 mt-4 m-2'>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
