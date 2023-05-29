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

export const cleanText = (text = '') => text.trim();

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^[0-9]+$/;
  return regex.test(phone);
};

export const validateCedula = (cedula) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(cedula);
};

export const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
};
