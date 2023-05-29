import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { InputForm } from '../InputForm';
import { Button } from '../Button';

const initForm = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const [formValues, setFormValues] = useState(initForm);

  const login = async () => {};

  return (
    <div className='row d-flex justify-content-center pt-5 animate__animated animate__fadeInUp animate__slow'>
      <div className='col-lg-4 col-md-5 col-sm-8 col-8'>
        <form
          style={{
            boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.9)',
          }}
          className='border border-dark bg-secondary p-4 rounded rounded-3'
          onSubmit={(e) => e.preventDefault()}>
          <div className='mb-3 d-flex justify-content-center'>
            <h4 className='text-light text-center'>Inicia Sesión</h4>
          </div>

          <InputForm
            value={formValues.email}
            type='email'
            placeholder='Email'
            onChangeText={(text) => setFormValues({ ...formValues, email: text })}
          />

          <InputForm
            value={formValues.password}
            placeholder='Contraseña'
            type='password'
            onChangeText={(text) => setFormValues({ ...formValues, password: text })}
            secure
          />

          <Button onClick={() => login()} title='Iniciar Sesión' mt={'mt-3'} />

          <div className='mt-2 w-100 p-1 d-flex justify-content-center'>
            <Link to='/' className='text-info'>
              Volver al Inicio
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
