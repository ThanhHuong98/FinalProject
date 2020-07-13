/* eslint-disable no-undef */
import api from '../api/api';
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_TOP_SELL_HOME,
  RECEIVE_TOP_NEW_HOME,
  RECEIVE_TOP_RATE_HOME,
  RECEIVE_RECOMMENDED_HOME,
  RECEIVE_ALL_COURSE,
} from '../Constant/actions/home';
import { getUserInfo } from '../storage/storage';

const waitRequest = () => ({
  type: REQUEST_DATA,
});

const receiveData = (type, data) => ({
  type,
  data,
});
const requestFail = (error) => ({
  type: REQUEST_FAILED,
});

export const requestDataHomeScreen = (dispatch) => (page) => {
  dispatch(waitRequest());
  const user = getUserInfo();
  const data = {
    offset: page,
    limit: 10,
  };

  api.post('/course/top-sell', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_SELL_HOME, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });

  api.post('/course/top-new', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_NEW_HOME, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });

  api.post('/course/top-rate', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_TOP_RATE_HOME, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });

  if (user !== null) {
    user.then((res) => {
      api.get(`/user/recommend-course/${res.id}/10/1`)
        .then((response) => {
          dispatch(receiveData(RECEIVE_RECOMMENDED_HOME, response.data.payload));
        })
        .catch((error) => {
          console.log('request fail', error);
          requestFail(error);
        });
    });
  }
};

export const requestTopNew = (dispatch) => (page) => {
  const data = {
    offset: page,
    limit: 10,
  };
  api.post('/course/top-new', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_ALL_COURSE, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });
};

export const requestTopSell = (dispatch) => (page) => {
  const data = {
    offset: page,
    limit: 10,
  };
  api.post('/course/top-sell', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_ALL_COURSE, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });
};

export const requestTopRate = (dispatch) => (page) => {
  const data = {
    offset: page,
    limit: 10,
  };
  api.post('/course/top-rate', data)
    .then((response) => {
      dispatch(receiveData(RECEIVE_ALL_COURSE, response.data.payload));
    })
    .catch((error) => {
      requestFail(error);
    });
};

export const requestRecommended = (dispatch) => (page) => {
  const user = getUserInfo();
  if (user !== null) {
    user.then((res) => {
      api.get(`/user/recommend-course/${res.id}/10/${page}`)
        .then((response) => {
          dispatch(receiveData(RECEIVE_ALL_COURSE, response.data.payload));
        })
        .catch((error) => {
          requestFail(error);
        });
    });
  } else requestFail(error);
};

export const requestAllCourse = (dispatch) => (type) => {
  switch (type) {
    case 'TOP_RATE':
      requestRecommended(dispatch)(1);
      break;
    case 'TOP_NEW':
      requestTopNew(dispatch)(1);
      break;
    case 'TOP_SELL':
      requestTopSell(dispatch)(1);
      break;
    case 'RECOMMENDED':
      requestRecommended(dispatch)(1);
      break;
    default:
      break;
  }
};
