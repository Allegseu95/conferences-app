// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faUser, faScrewdriver } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Sidebar =()=>{

    return <div>
        <div className="sidebar">
            
            <div className="headersidebar mt-3 mb-3">
                <img className='img_icon' src="/src/assets/icon.png" alt="" srcset="" />
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
                       <span className='hoverbutton'>
                        Registros
                       </span>
                    </a>
                </li>
                <li >
                    <a href="/registros">
                    <FontAwesomeIcon icon={faScrewdriver} />
                       <span className='hoverbutton'>
                        Categorías
                       </span>
                    </a>
                </li>
                <li >
                    <a href="/registros">
                    <FontAwesomeIcon icon={faScrewdriver} />
                       <span className='hoverbutton'>
                        Inscripciones
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