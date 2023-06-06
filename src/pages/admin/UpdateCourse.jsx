import { useEffect, useState } from 'react';
import { Sidebar } from './sidebar';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { InputFileForm } from '@/components/InputFileForm';
import { useServer } from '@/contexts/ServerContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLoader } from '@/contexts/LoaderContext';
import { updateCourse } from '@/helpers/constants';
// admin@conferencesapp.com
// Admin9276#
export const UpdateCourse = () => {
  const [updateForm, setUpdateForm] = useState(updateCourse);
  const [currentData, setCurrentData] = useState({ photo: null, certificate: null });

  const server = useServer();
  const { curseId } = useParams(); // Obtienes el ID del curso de los parámetros de la URL
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();

  const updateCurse = async () => {
    showLoader();
    try {
      /*const updatedData = { ...updateForm };
      delete updatedData._id;
      
      delete updatedData.__v;

      updatedData.photoBase64 = updatedData.photoURL;
      delete updatedData.photoURL;
      updatedData.certificateTemplateBase64 = updatedData.certificateTemplateURL;
      delete updatedData.certificateTemplateURL;
      console.log(updatedData)*/

      const data = {
        title: updateForm.title,
        description: updateForm.description,
        //photoBase64: updateForm.photoURL,
        price: updateForm.price,
        type: updateForm.type,
        startDate: updateForm.startDate,
        endDate: updateForm.endDate,
        //certificateTemplateBase64: updateForm.certificateTemplateURL,
      };
      if (updateForm.photoURL !== currentData.photo) {
        data.photoBase64 = updateForm.photoURL;
      }

      if (updateForm.certificateTemplateURL !== currentData.certificate) {
        data.certificateTemplateBase64 = updateForm.certificateTemplateURL;
      }

      console.log(data);

      const result = await server.updateCourse(curseId, data);
      console.log(result)
      showBasicAlert('Actializacion Exitosa!', 'success');
      navigate('/lista-certificados');
    } catch (error) {
      console.log(error);
      showBasicAlert(
        error?.response?.data?.mensaje ?? 'Ocurrio un problema! Intentelo más tarde',
        'error'
      );
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const curso = await server.getCourseById(curseId); // Obtén el curso por su ID
        //console.log(curso);
        setCurrentData({ photo: curso.photoURL, certificate: curso.certificateTemplateURL });
        setUpdateForm(curso);
      } catch (error) {
        console.log(error);
        showBasicAlert(error ?? 'Ocurrió un problema! Inténtelo más tarde', 'error');
      }
    };

    fetchCourseById();
  }, [curseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateCurse();
  };

  return (
    <div className='content_base' style={{ height: '100vh' }}>
      <Sidebar />
      <div className='contentwithoutsidebar2'>
        <div className='contenedorLista'>
          <div className='mt-3'>
            <form onSubmit={handleSubmit} className='row g-3'>
              <div className='col-md-12 p-2'>
                <label className='form-label'>Titulo</label>
                <input
                  value={updateForm.title}
                  type='text'
                  placeholder='Escriba un titulo'
                  className='form-control p-2'
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, title: e.target.value });
                  }}
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Fecha de inicio</label>
                <input
                  type='date'
                  value={
                    updateForm.startDate
                      ? new Date(updateForm.startDate).toISOString().split('T')[0]
                      : ''
                  }
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, startDate: e.target.value });
                  }}
                  className='form-control p-2'
                  id='inputAddress2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Fecha de fin</label>
                <input
                  value={
                    updateForm.endDate
                      ? new Date(updateForm.endDate).toISOString().split('T')[0]
                      : ''
                  }
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, endDate: e.target.value });
                  }}
                  type='date'
                  className='form-control p-2'
                  id='inputAddress2'
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Tipo</label>
                <select
                  className='p-2 form-select'
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, type: e.target.value });
                  }}
                  value={updateForm.type}>
                  <option value='congress'>Congreso</option>
                  <option value='workshop'>Taller</option>
                </select>
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Imagen</label>
                <InputFileForm
                  acceptFile='image/*'
                  onChangeText={(base64String) =>
                    setUpdateForm({ ...updateForm, photoURL: base64String })
                  }
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Plantilla de Certificado</label>
                <InputFileForm
                  acceptFile='image/*'
                  onChangeText={(base64String) =>
                    setUpdateForm({ ...updateForm, certificateTemplateURL: base64String })
                  }
                />
              </div>
              <div className='col-md-4 mt-2 p-2'>
                <label className='form-label'>Precio</label>
                <input
                  value={updateForm.price}
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, price: e.target.value });
                  }}
                  type='number'
                  className='form-control p-2'
                />
              </div>
              <div className='col-12 mt-2 p-2'>
                <label className='form-label'>Descripción</label>
                <textarea
                  value={updateForm.description}
                  onChange={(e) => {
                    setUpdateForm({ ...updateForm, description: e.target.value });
                  }}
                  type='text'
                  className='form-control p-3'
                  id='inputAddress'
                  placeholder='Descripcion'
                />
              </div>
              <button type='submit' className='btn btn-success p-2 col-2 mt-4'>
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};