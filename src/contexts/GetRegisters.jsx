import React, { createContext, useContext } from 'react';

import { postAxios, getAxios, putAxios, deleteAxios } from '@/helpers/axios';

import { storage } from '@/helpers/storage';

import { auth_token } from '@/helpers/constants';

export const AdminContext = createContext(null);

export const adminserve = () => useContext(AdminContext);

const getToken = () => {
  const _token = storage.get(auth_token);
  return _token ? { Token: _token } : {};
};

class AdminApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API;
  }

  getRegisters = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/api/user/get-all-registers`, getToken())
        .then((result) => 
        { 
           resolve(result)
        })
        .catch((err) => 
        { 
            reject(err)
        })

    });
  };

  UpdateStatus = (data) => {
    console.log('el dato a actualizar');
    console.log(data);
    return new Promise((resolve, reject) => {
      putAxios(`${this.baseUrl}/api/user/update-status-register`, data, getToken())
        .then((result) => 
        { 
            console.log(result);
            resolve(result)
        })
        .catch((err) => 

        { 
            console.log(err);
            reject(err)
        })

    });
  };


}

export const AdminProvider = ({ children }) => (
  <AdminContext.Provider value={new AdminApi()}>{children}</AdminContext.Provider>
);