import api from '../api/api';

/* eslint-disable import/prefer-default-export */
import { REQUEST_DATA, REQUEST_FAILED, RECEIVE_SEARCH_RESULT } from '../Constant/actions/search';

const requestSearch = () => ({
  type: REQUEST_DATA,
});
const requestFailed = () => ({
  type: REQUEST_FAILED,
});
const receiveResult = (data) => ({
  type: RECEIVE_SEARCH_RESULT,
  data,
});

export const performSearch = (dispatch) => async (searchKey, page) => {
  dispatch(requestSearch());
  try {
    const data = {
      keyword: searchKey,
      limit: 10,
      page,
    };
    const response = await api.post('/course/search', data);
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveResult(result.payload.rows));
    } else dispatch(requestFailed());
  } catch (error) {
    console.log(error);
    dispatch(requestFailed);
  }
};
