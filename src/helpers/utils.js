export const orderCoursesByType = (courses = []) => {
  if (courses.length <= 0) {
    return [];
  }

  courses.sort((a, b) => {
    if (a.type === 'congress') {
      return -1;
    } else if (b.type === 'congress') {
      return 1;
    } else {
      return 0;
    }
  });

  return courses;
};
