/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import AuthenReducer from '../../reducers/authen';
import { requestLogin, requestRegister } from '../../actions/authen';

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
          }
        }
    >
      {props.children}
    </AuthenContext.Provider>
  );
};
export { AuthenProvider, AuthenContext };
