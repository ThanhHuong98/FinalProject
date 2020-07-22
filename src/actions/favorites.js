/* eslint-disable import/prefer-default-export */
import api from '../api/api';
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_ALL_FAVORITES,
} from '../Constant/actions/favorites';

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

export const requestFavorites = (dispatch) => (page) => {
  dispatch(waitRequest());
  api.get('/user/get-favorite-courses', null)
      .then((response) => {
        console.log('Load Favorites: ', response);
        dispatch(receiveData(response.data.payload));
      })
      .catch((error) => {
        console.log('Load Favorites: ', error);
        requestFail(error);
      });
};

