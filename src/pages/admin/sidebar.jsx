// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faUser, faScrewdriver } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/static/styles/sidebar.css';
import '@/static/base/base.css';

export const Sidebar =()=>{

    return <div>
        <div className="sidebar">
            
            <div className="headersidebar mt-3 mb-3">
                <img className='img_icon' src="/src/assets/icon.png" alt="" srcSet="" />
            </div>

            <nav className="listsidebar">
                <ul>
                <li>
                    <a  href="/usuarios"> 
                    <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
                       <span className='hoverbutton'>
                            Usuarios
                        </span> 
                    </a>
                </li>
                <li >
                    <a href="/registros">
                    <FontAwesomeIcon icon={faScrewdriver} />
                       <span className='hoverbutton hoverbutton2'>
                        Registros
                       </span>
                    </a>
                </li>
                <li >
                    <a href="/asistencias">
                    <FontAwesomeIcon icon={faScrewdriver} />
                       <span className='hoverbutton'>
                        Asistencias
                       </span>
                    </a>
                </li>
                </ul>
            </nav>

            <div className="footersidebar">
                <span className='hoverbutton'>
                    &copy; 2023 Conferencias App
                </span>
            </div>

        </div>
    </div>

}