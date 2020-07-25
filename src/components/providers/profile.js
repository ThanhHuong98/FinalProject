/* eslint-disable react/destructuring-assignment */
import React, { useReducer } from 'react';
import { requestProfile } from '../../actions/profile';
import ProfileReducer from '../../reducers/profile';

const ProfileContext = React.createContext();
const initialState = {
  isLoading: false,
  profile: {},
  error: '',
};

const ProfileProvider = (props) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  return (
    <ProfileContext.Provider
      value={
              {
                state,
                requestProfile: requestProfile(dispatch),
              }
            }
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
