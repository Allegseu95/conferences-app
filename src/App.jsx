import { RouterManager } from '@/routes';
import { Sidebar } from '@/components/sidebar';


export const App = () => {
  return (
    <div>
      <Sidebar/>
      <RouterManager />;
    </div>
  )
};
