import { Fragment, useEffect, useState } from 'react';

import { Header } from '@/components/Header';
import { CardImageHome } from '@/components/public/CardImageHome';
import { FormRegister } from '@/components/public/FormRegister';
import { Footer } from '@/components/Footer';

import { coursesFake } from '@/mock/course';

import { orderCoursesByType } from '@/helpers/utils';

export const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const _courses = orderCoursesByType(coursesFake);
    setCourses(_courses);
  }, []);

  return (
    <Fragment>
      <Header />

      <div className='container m-auto w-100'>
        <div className='row'>
          <div className='col-sm-6 d-flex justify-content-center px-3'>
            {courses.length > 0 && (
              <div className='w-100'>
                {courses?.map((item, index) => (
                  <CardImageHome key={index} course={item ?? {}} />
                ))}
              </div>
            )}
          </div>

          <div className='col-sm-6 d-flex justify-content-center px-4'>
            {courses.length > 0 && <FormRegister data={courses} />}
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
