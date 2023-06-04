import { CgProfile, CgOrganisation } from 'react-icons/cg';
import { MdLocationPin } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { updateProfile } from '@/mock/profileUser';
import { InfoProfile } from '@/components/user/InfoProfile';
import '@/static/styles/layout.css';

export const Profile = () => {

  return (
    <div>
      <InfoProfile />
      <div className='row mt-2 justify-content-center'>
        <div className='col-sm-6'>
          <div className='alerta card m-3 mt-4'>
            <div className='card-header m-1'>Informacion Personal</div>
            <div className='card-body'>
              <div className='d-flex m-2'>
                <CgProfile className='fs-1 text-center text-info m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Nombre
                  </b>
                  <input
                    type='text'
                    value={updateProfile.name + ' ' + updateProfile.lastname}
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>
              <div className='d-flex m-2'>
                <MdLocationPin className='fs-1 text-center text-success m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Direccion
                  </b>
                  <input
                    type='text'
                    value={updateProfile.adress}
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>
              <div className='d-flex m-2'>
                <CgOrganisation className='fs-1 text-center text-secondary m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Empresa/Institucion
                  </b>
                  <input
                    type='text'
                    value={updateProfile.company}
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>
              <div className='d-flex m-2'>
                <BsPhoneFill className='fs-1 text-center text-warning m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Telefono
                  </b>
                  <input
                    type='text'
                    value={updateProfile.phone}
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>
              <div className='d-flex m-2'>
                <HiOutlineIdentification className='fs-1 text-center text-primary m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Cedula
                  </b>
                  <input
                    type='text'
                    value={updateProfile.cedula}
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>

              <div className='d-flex m-2'>
                <MdEmail className='fs-1 text-center text-danger m-1 ' />
                <div className='input-group input-group-sm'>
                  <b className='input-group-text p-2 fs-5' id='inputGroup-sizing-sm'>
                    Email
                  </b>
                  <input
                    placeholder='ejemplo@gmail.com'
                    value={updateProfile.email}
                    type='text'
                    className='form-control p-1 fs-5'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
