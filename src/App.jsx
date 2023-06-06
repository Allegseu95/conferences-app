import { LoaderProvider } from '@/contexts/LoaderContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { ServerProvider } from '@/contexts/ServerContext';

import { RouterManager } from '@/routes';

export const App = () => (
  <LoaderProvider>
    <AuthProvider>
      <ServerProvider>
        <RouterManager />
      </ServerProvider>
    </AuthProvider>
  </LoaderProvider>
);
