// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faUser, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiTask } from 'react-icons/bi';
import '@/static/styles/sidebar.css';
import '@/static/base/base.css';

export const Sidebar = () => {
  return (
    <div>
      <div className='sidebar-admin'>
        <div className='headersidebar mt-3 mb-3'>
          <img className='img_icon' src='/src/assets/icon.png' alt='' srcSet='' />
        </div>

        <nav className='listsidebar'>
          <ul className='ulsidebar'>
            <li className='lisidebar'>
              <a className='asidebar' href='/usuarios'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span className='hoverbutton'>Usuarios</span>
              </a>
            </li>
            <li className='lisidebar'>
              <a className='asidebar' href='/registros'>
                <FontAwesomeIcon icon={faScrewdriver} />
                <span className='hoverbutton hoverbutton2'>Registros</span>
              </a>
            </li>
            <li className='lisidebar'>
              <a className='asidebar' href='/asistencias'>
                <FontAwesomeIcon icon={faScrewdriver} />
                <span className='hoverbutton'>Asistencias</span>
              </a>
            </li>
            <li className='lisidebar'>
              <a className='asidebar' href='/lista-certificados'>
                <BiTask className='fs-6'/>
                <span className='hoverbutton'>Cursos</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className='footersidebar'>
          <span className='hoverbutton'>&copy; 2023 Conferencias App</span>
        </div>
      </div>
    </div>
  );
};
