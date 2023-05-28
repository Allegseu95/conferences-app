import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { InputForm } from '../InputForm';
import { Button } from '../Button';
import { CheckBox } from '../CheckBox';

const initForm = {
  name: '',
  lastname: '',
  email: '',
  identification: '',
  phone: '',
  address: '',
  organization: '',
  password: '',
  inscriptions: [],
};

export const FormRegister = ({ data = [] }) => {
  const [formValues, setFormValues] = useState(initForm);
  const [courses, setCourses] = useState([]);

  const register = async () => {
    const _courses = courses.filter((item) => item?.select);
  };

  const handleCheckboxChange = (id, isChecked) => {
    const _courses = courses.map((item) => {
      if (item?._id === id) {
        item.select = isChecked;
      }

      return item;
    });

    setCourses(_courses);
  };

  useEffect(() => {
    const _courses = data?.map((item) => ({
      ...item,
      select: false,
    }));

    setCourses(_courses);
  }, []);

  return (
    <div className='w-100  mb-5'>
      <div className='position-sticky top-0'>
        <form
          style={{
            boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.9)',
          }}
          className='border border-dark bg-secondary p-4 w-100 rounded rounded-3 animate__animated animate__fadeInUp animate__slow'
          onSubmit={(e) => e.preventDefault()}>
          <div className='mb-3 d-flex justify-content-center'>
            <h4 className='text-light text-center'>Registro de Participante</h4>
          </div>

          <InputForm
            value={formValues.name}
            placeholder='Nombres'
            onChangeText={(text) => setFormValues({ ...formValues, name: text })}
          />

          <InputForm
            value={formValues.lastname}
            placeholder='Apellidos'
            onChangeText={(text) => setFormValues({ ...formValues, lastname: text })}
          />

          <InputForm
            value={formValues.identification}
            placeholder='Cédula'
            onChangeText={(text) => setFormValues({ ...formValues, identification: text })}
          />

          <InputForm
            value={formValues.email}
            type='email'
            placeholder='Email'
            onChangeText={(text) => setFormValues({ ...formValues, email: text })}
          />

          <InputForm
            value={formValues.phone}
            placeholder='Celular'
            onChangeText={(text) => setFormValues({ ...formValues, phone: text })}
          />

          <InputForm
            value={formValues.address}
            placeholder='Dirección'
            onChangeText={(text) => setFormValues({ ...formValues, address: text })}
          />

          <InputForm
            value={formValues.organization}
            placeholder='Empresa'
            onChangeText={(text) => setFormValues({ ...formValues, organization: text })}
          />

          <InputForm
            value={formValues.password}
            placeholder='Contraseña'
            type='password'
            onChangeText={(text) => setFormValues({ ...formValues, password: text })}
            secure
          />

          {courses?.map((item, index) => (
            <CheckBox
              key={index}
              label={`${item?.title} - ${item?.price} $`}
              id={item?._id}
              checked={item?.select}
              onChange={handleCheckboxChange}
            />
          ))}

          <Button onClick={() => register()} title='Registrarse' mt={'mt-3'} />

          <div className='row mt-2 w-100 p-1 d-flex justify-content-center'>
            <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
              <p className='text-light text-center'>Si ya te registraste </p>
            </div>
            <div className='col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center'>
              <Link to='/login' className='text-info text-center'>
                Inicia sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
