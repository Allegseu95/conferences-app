export const paymentOptions = [
  {
    _id: '',
    name: 'Tipo de Pago',
  },
  {
    _id: 'transfer',
    name: 'Transferencia',
  },
  {
    _id: 'efective',
    name: 'Efectivo',
  },
];

export const initFormRegister = {
  name: '',
  lastname: '',
  email: '',
  cedula: '',
  phone: '',
  address: '',
  company: '',
  password: '',
  inscriptions: [],
  typePayment: '',
  voucherBase64: '',
};

export const initFormLogin = {
  email: '',
  password: '',
};

export const auth_token = 'auth_token';
export const auth_user = 'auth_user';
export const auth_role = 'auth_role';
