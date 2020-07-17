/* eslint-disable import/prefer-default-export */
const { REQUEST_AUTHOR, RECEIVE_AUTHOR, REQUEST_FAIL } = require('../Constant/actions/author');
const { default: api } = require('../api/api');

const requestAuthor = () => ({
  type: REQUEST_AUTHOR,
});
const receiveAuthor = (data) => ({
  type: RECEIVE_AUTHOR,
  data,
});
const requestFail = () => ({
  type: REQUEST_FAIL,
});
export const getAuthorDetails = (dispatch) => async (id) => {
  dispatch(requestAuthor());
  try {
    const response = await api.get(`/instructor/detail/${id}`);
    const result = response.data;
    if (result.message === 'OK') {
      console.log('author: ', result.payload);
      dispatch(receiveAuthor(result.payload));
    } else dispatch(requestFail());
  } catch (err) {
    dispatch(requestFail());
    console.log(err);
  }
};
