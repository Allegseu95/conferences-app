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
      showBasicAlert('Llene su nombre', icon);
      return false;
    }

    if (data?.lastname === '') {
      showBasicAlert('Llene su apellido', icon);
      return false;
    }

    if (data?.phone === '') {
      showBasicAlert('Llene su telefono', icon);
      return false;
    }

    if (data?.identification === '') {
      showBasicAlert('Llene su identificacion', icon);
      return false;
    }

    if (data?.email === '') {
      showBasicAlert('Llene el email', icon);
      return false;
    }

    if (data?.password === '') {
      showBasicAlert('Llene una contraseña', icon);
      return false;
    }
    if (!validateEmail(data?.email)) {
      showBasicAlert('Llene un email valido', icon);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    validateVerified(form);
    console.log(form);
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
                  type='number'
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
                <label className='form-label'>Cedula/Pasaporte</label>
                <input
                  placeholder='cedula o pasaporte'
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
