/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import api from '../api/api';
import {
  REQUEST_DATA,
  RECEIVE_CATEGORY_BROWSE,
  RECEIVE_AUTHOR_BROWSE,
  RECEIVE_CATEGORY_DETAILS,
  REQUEST_FAILED
} from '../Constant/actions/browse';

const requestData = () => ({
  type: REQUEST_DATA,
});
const requestFail = () => ({
  type: REQUEST_FAILED,
});
const receiveCategory = (data) => ({
  type: RECEIVE_CATEGORY_BROWSE,
  data,
});
const receiveAuthor = (data) => ({
  type: RECEIVE_AUTHOR_BROWSE,
  data,
});
const receiveCategoryDetails = (data) => ({
  type: RECEIVE_CATEGORY_DETAILS,
  data,
});
export const getCategory = (dispatch) => async () => {
  dispatch(requestData());
  try {
    const response = await api.get('/category/all');
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveCategory(result.payload));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail());
  }
};
export const getAuthor = (dispatch) => async () => {
  dispatch(requestData());
  try {
    const response = await api.get('/instructor');
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveAuthor(result.payload));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail());
  }
};
export const getCategoryDetails = (dispatch) => async (id, page = 0) => {
  dispatch(requestData());
  try {
    const body = {
      keyword: '',
      opt: {
        category: [
          id,
        ],
      },
      limit: 10,
      offset: page,
    };
    const response = await api.post('/course/search', body);
    const result = response.data;
    if (result.message === 'OK') {
      dispatch(receiveCategoryDetails(result.payload.rows));
    } else dispatch(requestFail());
  } catch (error) {
    console.log(error);
    dispatch(requestFail);
  }
};
