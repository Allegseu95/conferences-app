import {Sidebar} from '@/pages/admin/sidebar'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Asistencias = () => {
    
  
    return (
      <div className='content_base'>
          <Sidebar></Sidebar>
        <div className="container contentwithoutsidebar">
          <h1 className='mb-1'>Asistencias <FontAwesomeIcon icon={faAsterisk} /> </h1>
        </div>
      </div>
    );
  
  };