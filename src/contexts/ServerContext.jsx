import React, { createContext, useContext } from 'react';

import { postAxios, getAxios, putAxios, deleteAxios } from '@/helpers/axios';

import { storage } from '@/helpers/storage';

import { auth_token } from '@/helpers/constants';

export const ServerContext = createContext(null);

export const useServer = () => useContext(ServerContext);

const getToken = () => {
  const _token = storage.get(auth_token);
  return _token ? { Token: _token } : {};
};

class ServerApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API;
  }

  getCourses = () => {
    return new Promise((resolve, reject) => {
      getAxios(`${this.baseUrl}/api/course/get-courses`)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  registerParticipant = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/api/user/register-participant`, data)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  login = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/api/user/login`, data)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
}

export const ServerProvider = ({ children }) => (
  <ServerContext.Provider value={new ServerApi()}>{children}</ServerContext.Provider>
);
