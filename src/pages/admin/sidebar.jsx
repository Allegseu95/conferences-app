import {
  faUser,
  faArrowRightFromBracket,
  faFolder,
  faClipboardUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiTask } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';
import '@/static/styles/sidebar.css';
import '@/static/base/base.css';
import { useAuth } from '@/contexts/AuthContext';
import icon from '@/assets/icons/icon.png';

export const Sidebar = () => {
  const { authLogout } = useAuth();
  return (
    <div>
      <div className='sidebar-admin'>
        <div className='headersidebar mt-3 mb-3'>
          <img className='img_icon' src={icon} alt='icono' srcSet='' />
        </div>

        <nav className='listsidebar'>
          <ul className='ulsidebar'>
            <li className='lisidebar'>
              <Link to='/usuarios' className='asidebar'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span className='hoverbutton'>Usuarios</span>
              </Link>
            </li>
            <li className='lisidebar'>
              <Link to='/registros' className='asidebar'>
                <FontAwesomeIcon icon={faFolder} />
                <span className='hoverbutton hoverbutton2'>Registros</span>
              </Link>
            </li>
            <li className='lisidebar'>
              <Link to='/asistencias' className='asidebar'>
                <FontAwesomeIcon icon={faClipboardUser} />
                <span className='hoverbutton'>Asistencias</span>
              </Link>
            </li>
            <li className='lisidebar'>
              <Link className='asidebar' to='/lista-cursos'>
                <BiTask className='fs-6 text-danger' />
                <span className='hoverbutton'>Cursos</span>
              </Link>
            </li>
            <li className='lisidebar'>
              <Link className='asidebar' to='/lista-verificados'>
                <GiConfirmed className='fs-6 text-success' />
                <span className='hoverbutton'>Verificaciones</span>
              </Link>
            </li>
            <li className='lisidebar2'>
              <Link className='asidebar asidebar2' to='/lista-certificados'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <span onClick={() => authLogout()} className='hoverbutton'>
                  Cerrar Sesion
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className='footersidebar'>
          <span>&copy; 2023 Conferencias App</span>
        </div>
      </div>
    </div>
  );
};
