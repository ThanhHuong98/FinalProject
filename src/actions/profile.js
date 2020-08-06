/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import api from '../api/api';
import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE_SUCCESS,
  RECEIVE_PROFILE_FAILED,

  REQUEST_UPDATE_PROFILE,
  RECEIVE_RESULT_UPLOAD,

  REQUEST_UPLOAD_AVATAR,
  RECEIVE_URL,

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
      dispatch(receiveData(response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });
};

const waitUpload = () => ({
  type: REQUEST_UPDATE_PROFILE,
});

const receiveUpload = (status) => ({
  type: RECEIVE_RESULT_UPLOAD,
  status,
});

const requestAvatar = () => ({
  type: REQUEST_UPLOAD_AVATAR,
});

const receiveUrl = (url) => ({
  type: RECEIVE_URL,
  url,
});

export const uploadProfile = (dispatch) => async (name, phone) => {
  dispatch(waitUpload());
  const data = {
    name,
    phone
  };
  const AuthStr = 'Bearer '.concat(await getToken());
  api.put('/user/update-profile', data, { headers: { Authorization: AuthStr } })
    .then((response) => {
      if (response.data.message === 'OK') {
        dispatch(receiveUpload(1));
      } else {
        dispatch(receiveUpload(2));
      }
    })
    .catch((error) => {
      dispatch(receiveUpload(2));
    });
};

export const cancelUpdate = (dispatch) => () => {
  dispatch(receiveUpload(0));
  dispatch(receiveUrl(''));
};

export const uploadAvatar = (dispatch) => async (avatarFile) => {
  dispatch(requestAvatar());
  const data = new FormData();
  data.append('avatar', {
    uri: avatarFile.uri,
    name: avatarFile.name,
    type: avatarFile.type,
  });
  const AuthStr = 'Bearer '.concat(await getToken());
  api.post('/user/upload-avatar', data, { headers: { Authorization: AuthStr } })
    .then((response) => {
      if (response.data.message === 'OK') {
        console.log('upload avatar sucessfully: : ', response.data.payload.url);
        dispatch(receiveUrl(response.data.payload.url));
      } else dispatch(receiveUrl('FAILED'));
    })
    .catch((error) => {
      dispatch(receiveUrl('FAILED'));
      console.log('upload avatar: ', error);
    });
};
