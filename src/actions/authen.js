/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo } from '../storage/storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  REQUEST_REGISTER,
  REGISTER_RESPONE,
  CANCEL_REGISTER,
  CANCEL_LOGIN,

  REQUEST_RESET_PASS,
  RESPONSE_RESET_PASS,

} from '../Constant/actions/authen';
// Login
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
      dispatch(loginFailed());
    });
};

const dismissLogin = () => ({
  type: CANCEL_LOGIN,
});

export const cancelLogin = (dispatch) => () => {
  dispatch(dismissLogin());
};

// Register
const waitRegister = () => ({
  type: REQUEST_REGISTER,
});

const responseRegister = (data) => ({
  type: REGISTER_RESPONE,
  data,
});

const dismissRegister = (data) => ({
  type: CANCEL_REGISTER,
  data,
});

export const cancelRegister = (dispatch) => () => {
  const data = { message: '' };
  dispatch(dismissRegister(data));
};

export const requestRegister = (dispatch) => (registerInfo) => {
  dispatch(waitRegister());
  const data = {
    username: registerInfo.username,
    email: registerInfo.email,
    phone: registerInfo.phone,
    password: registerInfo.password
  };
  api.post('/user/register', data)
    .then((response) => {
      dispatch(responseRegister(response.data));
    })
    .catch((error) => {
      const mdata = { message: 'FAILED' };
      dispatch(responseRegister(mdata));
    });
};

// Reset password by Email
const waitReset = () => ({
  type: REQUEST_RESET_PASS,
});
const receiveReset = (status) => ({
  type: RESPONSE_RESET_PASS,
  status,
});

export const cancelReset = (dispatch) => () => {
  dispatch(receiveReset(0));
};
export const resetPassByEmail = (dispatch) => (email) => {
  dispatch(waitReset());
  const data = {
    email
  };
  api.post('/user/forget-pass/send-email', data)
    .then((response) => {
      console.log('Send email reset pass: ', response.status);
      if (response.status === 200) {
        dispatch(receiveReset(1));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(receiveReset(2));
    });
};
