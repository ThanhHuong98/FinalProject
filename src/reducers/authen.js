import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILED }
  from '../Constant/actions/authen';

const AuthenReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginStatus: 1,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loginStatus: 2,
      };
    default:
      return state;
  }
};

export default AuthenReducer;
