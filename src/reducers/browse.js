import {
  REQUEST_DATA,
  RECEIVE_ALL_COURSE,

  RECEIVE_CATEGORY_BROWSE,
  RECEIVE_AUTHOR_BROWSE,

  RECEIVE_CATEGORY_DETAILS,
} from '../Constant/actions/browse';

const BrowseReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return ({
        ...state,
        isLoading: true,
      });
    case RECEIVE_CATEGORY_BROWSE:
      return {
        ...state,
        isLoading: false,
        categories: action.data,
      };
    case RECEIVE_AUTHOR_BROWSE:
      return {
        ...state,
        isLoading: false,
        authors: action.data,
      };
    case RECEIVE_CATEGORY_DETAILS:
      return {
        ...state,
        categoryDetails: action.data,
        isLoading: false,
      };

    case RECEIVE_ALL_COURSE:
      return ({
        ...state,
        allCourse: action.data,
      });
    default:
      return state;
  }
};
export default BrowseReducer;
