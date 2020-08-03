/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthenReducer from '../../reducers/authen';
import { requestLogin, requestRegister, resetPassByEmail, cancelReset } from '../../actions/authen';

const AuthenContext = React.createContext();
const initialState = {
  /*
      0: not login
      1: login success
      2: login fail
  */
  loginStatus: 0,
  isLoading: false,
  registerRespone: {},
  resetStatus: 0,
};
const AuthenProvider = (props) => {
  const [state, dispatch] = useReducer(AuthenReducer, initialState);
  return (
    <AuthenContext.Provider
      value={
          {
            state,
            login: requestLogin(dispatch),
            register: requestRegister(dispatch),
            resetPassByEmail: resetPassByEmail(dispatch),
            cancelReset: cancelReset(dispatch),
          }
        }
    >
      {props.children}
    </AuthenContext.Provider>
  );
};
export { AuthenProvider, AuthenContext };
