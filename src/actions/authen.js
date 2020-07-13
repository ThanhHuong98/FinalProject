/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo, getUserInfo} from '../storage/storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../Constant/actions/authen';

const waitLogin = () => ({
  type: REQUEST_LOGIN,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  data: user,
});
const loginFailed = (error) => ({
  type: LOGIN_FAILED,
});

export const requestLogin = (dispatch) => (email, password) => {
  dispatch(waitLogin());

  const data = {
    email,
    password
  };

  api.post('/user/login', data)
    .then((response) => {
      storeUserInfo({ id: response.data.userInfo.id, token: response.data.token });
      setInterval(() => {
        dispatch(loginSuccess(response.data));
      }, 1500);
    })
    .catch((error) => {
      setInterval(() => {
        dispatch(loginFailed());
      }, 1500);
    });
};
export const requestRegister = () => {};
