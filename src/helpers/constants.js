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
  voucher: '',
  role: 'participant',
};

export const initFormLogin = {
  email: '',
  password: '',
};
