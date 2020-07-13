import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itedu.me',
  timeout: 3000,

});

const api = {
  get: (url, params) => instance.get(`${url}`, params),
  post: (url, data, config) => instance.post(`${url}`, data, config),
};

export default api;
