import api from '../api/api';
import { saveSearchHistory } from '../storage/storage';

/* eslint-disable import/prefer-default-export */
import {
  REQUEST_DATA, REQUEST_FAILED, RECEIVE_SEARCH_RESULT, RECEIVE_RECENT_SEARCH,
} from '../Constant/actions/search';

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

export const performSearch = (dispatch) => async (recentSearch, searchKey, page) => {
  console.log('search key', searchKey);
  console.log('recent search', recentSearch);
  if (searchKey.length !== 0) {
    if (recentSearch.indexOf(searchKey) === -1) {
      console.log('save recent');
      const history = [...recentSearch, searchKey];
      saveSearchHistory(history);
      dispatch({
        type: RECEIVE_RECENT_SEARCH,
        data: history,
      });
    }
    dispatch(requestSearch());
    const data = {
      keyword: searchKey,
      limit: 10,
      page,
    };
    const response = await api.post('/course/searchV2', data);
    if (response) {
      console.log('dispatch');
      dispatch(receiveResult(response.data.payload));
    } else {
      console.log('search failed');
      dispatch(requestFailed());
    }
  }
};
