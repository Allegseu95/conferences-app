import { useState } from 'react';

import { CgProfile, CgOrganisation } from 'react-icons/cg';
import { MdLocationPin } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';
import { HiOutlineIdentification } from 'react-icons/hi';
import { RiProfileLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { MdSave } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

import { useAuth } from '@/contexts/AuthContext';
import { useServer } from '@/contexts/ServerContext';
import { useLoader } from '@/contexts/LoaderContext';

import { InfoProfile } from '@/components/user/InfoProfile';

import { showBasicAlert } from '@/helpers/sweetAlert';
import { upperFirstWord } from '@/helpers/utils';

import '@/static/styles/layout.css';

export const Profile = () => {
  const { user } = useAuth();
  const { showLoader, hideLoader } = useLoader();
  const server = useServer();

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const updateProfile = async () => {
    showLoader();
    try {
      const data = {
        name: editedUser.name,
        lastname: editedUser.lastname,
        address: editedUser.address,
        company: editedUser.company,
        phone: editedUser.phone,
        cedula: editedUser.cedula,
      };

      await server.updatedUser(data);
      showBasicAlert('Actializacion Exitosa!', 'success');
    } catch (error) {
      console.log(error);
      showBasicAlert(
        error?.response?.data?.mensaje ?? 'Ocurrio un problema! Intentelo más tarde',
        'error'
      );
    } finally {
      hideLoader();
      setEditMode(false);
    }
  };

  return (
    <div className='page-proflie'>
      <InfoProfile name={upperFirstWord(user?.name)} />
      <div className='row mt-2 justify-content-center'>
        <div className='col-sm-6'>
          <div className='alerta card m-3 mt-4'>
            <div className='card-header m-1 p-2'>Informacion Personal</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='card-body'>
                <div className='d-flex m-2'>
                  <CgProfile className='fs-1 text-center text-info m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Nombre</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                      value={upperFirstWord(editedUser?.name)}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div className='d-flex m-2'>
                  <RiProfileLine className='fs-1 text-center text-info m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Apellido</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, lastname: e.target.value })}
                      value={editedUser?.lastname}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div className='d-flex m-2'>
                  <MdLocationPin className='fs-1 text-center text-success m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Direccion</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
                      value={editedUser?.address}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div className='d-flex m-2'>
                  <CgOrganisation className='fs-1 text-center text-secondary m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Empresa/Institucion</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, company: e.target.value })}
                      value={editedUser?.company}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div className='d-flex m-2'>
                  <BsPhoneFill className='fs-1 text-center text-warning m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Telefono</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                      value={editedUser?.phone}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div className='d-flex m-2'>
                  <HiOutlineIdentification className='fs-1 text-center text-primary m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Cedula</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, cedula: e.target.value })}
                      value={editedUser?.cedula}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={!editMode}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className='d-flex justify-content-around'>
              {editMode ? (
                <button
                  type='button'
                  className='mt-4 mb-2 btn btn-success p-2'
                  onClick={async () => await updateProfile()}>
                  <MdSave className='fs-5' /> Guardar
                </button>
              ) : (
                <button
                  type='button'
                  className='mt-4 mb-2 btn btn-info p-2'
                  onClick={() => setEditMode(true)}>
                  <FiEdit className='fs-5' /> Editar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
<div className='d-flex m-2'>
                  <MdEmail className='fs-1 text-center text-danger m-1 ' />
                  <div className='input-group input-group-sm'>
                    <b className='input-group-text p-2 fs-5'>Email</b>
                    <input
                      onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                      value={editedUser?.email}
                      className='form-control p-1 fs-5'
                      type='text'
                      disabled={editMode}
                    />
                  </div>
                </div>
*/
