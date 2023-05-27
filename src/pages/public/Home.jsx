import { Fragment } from 'react';

import { Title } from '@/components/Title';

export const HomePage = () => {
  return (
    <Fragment>
      <Title text='mi texto desde el componente padre' />
      <main className='text-light'>
        <h1>Inicio</h1>
      </main>
    </Fragment>
  );
};
