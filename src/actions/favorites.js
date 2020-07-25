/* eslint-disable import/prefer-default-export */
import api from '../api/api';
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_ALL_FAVORITES,
} from '../Constant/actions/favorites';
import { getUserInfo } from '../storage/storage';

const waitRequest = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: RECEIVE_ALL_FAVORITES,
  data,
});
const requestFail = (error) => ({
  type: REQUEST_FAILED,
  error,
});

//const AuthStr = 'Bearer '.concat('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlNDMxZjQ4LTg3OTItNDA5ZC04NGIwLWE0YjI5YWM5NjQxNiIsImlhdCI6MTU5NTY1MjU3NywiZXhwIjoxNTk1NjU5Nzc3fQ.LCpatswczjdcQTAXWdgu08bEzVMqfEu29g1IAmmHbvA');
const getToken = async () => {
  const user = await getUserInfo();
  if (user) {
    return user.token;
  }
  return null;
};
// const AuthStr1 = 'Bearer '.concat(getToken());

export const requestFavorites = (dispatch) => async (page) => {
  dispatch(waitRequest());
 //const strToken = await getToken();
  const AuthStr1 = 'Bearer '.concat(await getToken());
  api.get('/user/get-favorite-courses', { headers: { Authorization: AuthStr1 } })
    .then((response) => {
      console.log('Load Favorites: ', response.data.payload);
      dispatch(receiveData(response.data.payload));
    })
    .catch((error) => {
      // console.log('Load Favorites: ', error);
      requestFail(error);
    });
};
