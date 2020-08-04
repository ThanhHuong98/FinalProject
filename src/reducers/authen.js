import {
  REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
  REQUEST_REGISTER, REGISTER_RESPONE, CANCEL_REGISTER, CANCEL_LOGIN,
  RESPONSE_RESET_PASS, REQUEST_RESET_PASS,
  REQUEST_ACTIVE_ACCOUNT, RESPONSE_ACTIVE_ACCOUNT,
} from '../Constant/actions/authen';

const AuthenReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
        loginStatus: 0,
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
    case CANCEL_LOGIN:
      return {
        ...state,
        isLoading: false,
        loginStatus: 0,
      };
    case REQUEST_REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_RESPONE:
      return {
        ...state,
        isLoading: false,
        registerRespone: action.data,
      };
    case CANCEL_REGISTER:
      return {
        ...state,
        isLoading: false,
        registerRespone: action.data,
      };
    case REQUEST_RESET_PASS:
      return {
        ...state,
        isLoading: true,
        resetStatus: 0,
      };
    case RESPONSE_RESET_PASS:
      return {
        ...state,
        isLoading: false,
        resetStatus: action.status,
      };
    case REQUEST_ACTIVE_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        activeStatus: 0,
      };
    case RESPONSE_ACTIVE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        activeStatus: action.status,
      };
    default:
      return state;
  }
};

export default AuthenReducer;
