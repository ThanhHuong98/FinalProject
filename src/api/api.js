import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itedu.me',
  timeout: 3000,
});
const api = {
  get: (url, params, config) => instance.get(`${url}`, params, config),
  post: (url, data) => instance.post(`${url}`, data),
};

export default api;
