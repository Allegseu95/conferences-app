import { Sidebar } from './sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVerified } from '@/helpers/constants';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { validateEmail, validatePassword } from '@/helpers/utils';
import { InputForm } from '@/components/InputForm';
export const CreateVerified = () => {
  const [form, setForm] = useState(createVerified);
  const navigate = useNavigate();

  const validateVerified = (data) => {
    const icon = 'warning';

    if (data?.name === '') {
      showBasicAlert('Llene el nombre', icon);
      return false;
    }

    if (data?.lastname === '') {
      showBasicAlert('Llene el apellido', icon);
      return false;
    }

    if (data?.phone === '') {
      showBasicAlert('Llene el telefóno', icon);
      return false;
    }

    if (data?.identification === '') {
      showBasicAlert('Llene la identificacion', icon);
      return false;
    }

    if (data?.email === '') {
      showBasicAlert('Llene el email', icon);
      return false;
    }

    if (!validateEmail(data?.email)) {
      showBasicAlert('El email que ingreso no es un email válido', icon);
      return false;
    }

    if (data?.password === '') {
      showBasicAlert('Llene una contraseña', icon);
      return false;
    }

    if (!validatePassword(data?.password)) {
      showBasicAlert(
        'Ingrese una contraseña segura',
        icon,
        'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial'
      );
      return false;
    }
    return true;
  };

  const registerVerified = () => {
    validateVerified(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar3'>
        <div className='items-movil'>
          <div className='mt-3'>
            <form className='row g-3' onSubmit={handleSubmit}>
              <div className='col-md-4 p-2'>
                <label className='form-label'>Nombre</label>
                <input
                  type='text'
                  placeholder='Escriba el nombre'
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
                  placeholder='Escriba los apellidos'
                  onChange={(e) => {
                    setForm({ ...form, lastname: e.target.value });
                  }}
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Teléfono</label>
                <input
                  placeholder='Escriba el teléfono'
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                  }}
                  type='number'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Email</label>
                <input
                  placeholder='Escriba un email'
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                  type='email'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Dirección</label>
                <input
                  placeholder='Dirección'
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                  }}
                  type='text'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Cédula/Pasaporte</label>
                <input
                  placeholder='Cédula o pasaporte'
                  onChange={(e) => {
                    setForm({ ...form, identification: e.target.value });
                  }}
                  type='number'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Contraseña</label>
                <InputForm
                  placeholder='Contraseña'
                  value={form.password}
                  type='password'
                  onChangeText={(text) => setForm({ ...form, password: text })}
                  secure
                />
              </div>
              <div>
                <button
                  type='button'
                  onClick={() => registerVerified()}
                  className='btn btn-success p-2 col-2 mt-4 m-2'>
                  Crear
                </button>
                <button
                  type='button'
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
