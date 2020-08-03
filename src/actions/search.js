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
    console.log('data', data);
    const response = await api.post('/course/search', data);
    if (response) {
      console.log('search: ', response);
      dispatch(receiveResult(response.payload.rows));
    }
  } catch (error) {
    console.log(error);
    dispatch(requestFailed());
  }
};
