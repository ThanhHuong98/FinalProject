import axios from 'axios';
import { getUserInfo } from '../storage/storage';
const instance = axios.create({
  baseURL: 'https://api.itedu.me',
  timeout: 3000,
});
const getToken = async() => {
  const user = await getUserInfo();
  if(user) return user.token;
  return null;
}
const config = {
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`
   },
}
const api = {
  get: (url, params) => instance.get(`${url}`, params, config),
  post: (url, data, config) => instance.post(`${url}`, data, config),
};

export default api;
