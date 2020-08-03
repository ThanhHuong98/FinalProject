import { REQUEST_DATA, REQUEST_FAILED, RECEIVE_SEARCH_RESULT } from '../Constant/actions/search';

const searchReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        searchResult: [],
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: action.data,
      };
    default:
      return state;
  }
};

export default searchReducer;
