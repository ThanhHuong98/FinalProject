/* eslint-disable react/destructuring-assignment */

import React, { useReducer } from 'react';
import AuthorReducer from '../../reducers/author';
import { getAuthorDetails } from '../../actions/author';

const AuthorContext = React.createContext();
const initialState = {
  isLoading: false,
  authorDetails: {
    name: '',
    avatar: '',
    intro: '',
    phone: '',
    major: '',
  },
};
const AuthorProvider = (props) => {
  const [state, dispatch] = useReducer(AuthorReducer, initialState);
  return (
    <AuthorContext.Provider
      value={
          {
            state,
            getAuthorDetails: getAuthorDetails(dispatch),
          }
        }
    >
      {props.children}
    </AuthorContext.Provider>
  );
};
export { AuthorProvider, AuthorContext };
