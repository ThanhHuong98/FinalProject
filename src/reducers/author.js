import { REQUEST_AUTHOR, REQUEST_FAIL, RECEIVE_AUTHOR } from '../Constant/actions/author';

const AuthorReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_AUTHOR:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_AUTHOR:
      return {
        ...state,
        isLoading: false,
        authorDetails: action.data,
      };
    default:
      return state;
  }
};
export default AuthorReducer;
