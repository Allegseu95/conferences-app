import { useState, useEffect } from 'react';
import { Sidebar } from './sidebar';
import { createCourse } from '@/helpers/constants';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { InputFileForm } from '@/components/InputFileForm';

export const CrearCurso = ({ data = [] }) => {
  const [form, setForm] = useState(createCourse);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validarCurso = (data) => {
    const icon = 'warning';

    if (data?.title === '') {
      showBasicAlert('Llene el titulo', icon);
      return false;
    }

    if (data?.description === '') {
      showBasicAlert('Llene la descripcion', icon);
      return false;
    }

    if (data?.price === '') {
      showBasicAlert('Ubique un precio', icon);
      return false;
    }

    if (data?.type === '') {
      showBasicAlert('Ubique un tipo', icon);
      return false;
    }

    if (data?.startDate === '') {
      showBasicAlert('Ubique un tipo', icon);
      return false;
    }

    if (data?.endDate === '') {
      showBasicAlert('Ubique un tipo', icon);
      return false;
    }

    if (data?.certificateTemplateURL === '' || !data?.certificateTemplateURL) {
      showBasicAlert('Suba una imagen', icon);
      return false;
    }

    if (data?.photoUrl === '' || !data?.photoUrl) {
      showBasicAlert('Suba una imagen', icon);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    const icon2 = 'success';
    e.preventDefault();
    setFormSubmitted(true);
    const isValid = validarCurso(form);
    console.log(form);
    if (isValid) {
      showBasicAlert('Curso Creado', icon2);
    }
  };

  return (
    <div className='content_base'>
      <Sidebar />
      <div className='contentwithoutsidebar2'>
        <div className='contenedorLista'>
          <div className='mt-3'>
            <form onSubmit={handleSubmit} className='row g-3'>
              <div className='col-md-12'>
                <label className='form-label'>Titulo</label>
                <input
                  value={form.title}
                  type='text'
                  placeholder='Escriba un titulo'
                  className='form-control p-2'
                  onChange={(e) => {
                    setForm({ ...form, title: e.target.value });
                  }}
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Fecha Inicio</label>
                <input
                  type='date'
                  value={form.startDate}
                  onChange={(e) => {
                    setForm({ ...form, startDate: e.target.value });
                  }}
                  className='form-control p-2'
                  id='inputAddress2'
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Fecha fin</label>
                <input
                  value={form.endDate}
                  onChange={(e) => {
                    setForm({ ...form, endDate: e.target.value });
                  }}
                  type='date'
                  className='form-control p-2'
                  id='inputAddress2'
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Tipo</label>
                <input
                  value={form.type}
                  onChange={(e) => {
                    setForm({ ...form, type: e.target.value });
                  }}
                  type='text'
                  className='form-control p-2'
                  id='inputAddress2'
                  placeholder='Tipo'
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Certificado</label>
                <InputFileForm
                  value={form.photoUrl}
                  acceptFile='image/*'  
                  onChangeText={(e) => setForm({ ...form, photoUrl: e.target.value })}
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Certificado</label>
                <input
                  value={form.certificateTemplateURL}
                  onChange={(e) => {
                    setForm({ ...form, certificateTemplateURL: e.target.value });
                  }}
                  type='file'
                  className='form-control p-2'
                />
              </div>
              <div className='col-md-4 mt-2'>
                <label className='form-label'>Precio</label>
                <input
                  value={form.price}
                  onChange={(e) => {
                    setForm({ ...form, price: e.target.value });
                  }}
                  type='number'
                  className='form-control p-2'
                />
              </div>
              <div className='col-12 mt-2'>
                <label className='form-label'>Descripcion</label>
                <textarea
                  value={form.description}
                  onChange={(e) => {
                    setForm({ ...form, description: e.target.value });
                  }}
                  type='text'
                  className='form-control p-3'
                  id='inputAddress'
                  placeholder='Descripcion'
                />
              </div>
                <button type='submit' className='btn btn-success p-2 col-2 mt-4'>
                  Crear
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
