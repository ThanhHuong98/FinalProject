import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itedu.me',
  timeout: 3000,
});
const api = {
  get: (url, params, config) => instance.get(`${url}`, params, config),
  put: (url, params, config) => instance.put(`${url}`, params, config),
  post: (url, data, config) => instance.post(`${url}`, data, config),
};

export default api;
