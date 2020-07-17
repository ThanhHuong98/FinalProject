/* eslint-disable no-undef */
import api from '../api/api';
import { storeUserInfo, getUserInfo } from '../storage/storage';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  REQUEST_REGISTER,
  REGISTER_RESPONE,

  // REGISTER_FAILED,

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
    email: 'Nglethimylinh@gmail.com',
    password: '123456789'
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

const waitRegister = () => ({
  type: REQUEST_REGISTER,
});

const responseRegister = (data) => ({
  type: REGISTER_RESPONE,
  data,
});

// const registerFailed = (data) => ({
//   tyoe: REGISTER_FAILED,
//   data,
// });
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
      console.log("Message Register: ", response.data);
      // setInterval(() => {
      //   dispatch(responseRegister(response.data));
      // }, 1500);
      dispatch(responseRegister(response.data));
    })
    .catch((error) => {
      console.log(error);
      const mdata = { message: 'FAILED' };
      console.log("Message Register: ", mdata);
      dispatch(responseRegister(mdata));
    });
};
