/* eslint-disable import/prefer-default-export */
import api from '../api/api';
import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE_SUCCESS,
  RECEIVE_PROFILE_FAILED,
} from '../Constant/actions/profile';
import { getUserInfo } from '../storage/storage';

const waitRequest = () => ({
  type: REQUEST_PROFILE,
});

const receiveData = (data) => ({
  type: RECEIVE_PROFILE_SUCCESS,
  data,
});
const requestFail = (error) => ({
  type: RECEIVE_PROFILE_FAILED,
  error,
});

const getToken = async () => {
  const user = await getUserInfo();
  if (user) {
    return user.token;
  }
  return null;
};

export const requestProfile = (dispatch) => async () => {
  dispatch(waitRequest());
  const AuthStr = 'Bearer '.concat(await getToken());
  api.get('/user/me', { headers: { Authorization: AuthStr } })
    .then((response) => {
      console.log('Load Profiles: ', response.data.payload);
      dispatch(receiveData(response.data.payload));
    })
    .catch((error) => {
      console.log('Load Favorites: ', error);
      requestFail(error);
    });
};
