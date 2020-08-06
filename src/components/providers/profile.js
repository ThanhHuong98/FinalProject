/* eslint-disable react/destructuring-assignment */
import React, { useReducer } from 'react';
import { requestProfile, uploadProfile, cancelUpdate, uploadAvatar } from '../../actions/profile';
import ProfileReducer from '../../reducers/profile';

const ProfileContext = React.createContext();
// uploadStatus:
// 0: chua upload profile
// 1: thanh cong
// 2: that bai
const initialState = {
  isLoading: false,
  profile: {},
  error: '',
  uploadStatus: 0,
  urlAvatar: '',
};

const ProfileProvider = (props) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  return (
    <ProfileContext.Provider
      value={
              {
                state,
                requestProfile: requestProfile(dispatch),
                updateProfile: uploadProfile(dispatch),
                cancelUpdate: cancelUpdate(dispatch),
                uploadAvatar: uploadAvatar(dispatch),
              }
            }
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
