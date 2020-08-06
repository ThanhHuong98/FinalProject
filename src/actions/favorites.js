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

const getToken = async () => {
  const user = await getUserInfo();
  if (user) {
    return user.token;
  }
  return null;
};

export const requestFavorites = (dispatch) => async (page) => {
  dispatch(waitRequest());
  const AuthStr1 = 'Bearer '.concat(await getToken());
  api.get('/user/get-favorite-courses', { headers: { Authorization: AuthStr1 } })
    .then((response) => {
      dispatch(receiveData(response.data.payload));
    })
    .catch((error) => {
      console.log('Load Favorites: ', error);
      requestFail(error);
    });
};
