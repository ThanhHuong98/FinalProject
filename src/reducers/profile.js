
import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE_SUCCESS,
  RECEIVE_PROFILE_FAILED,
} from '../Constant/actions/profile';

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.data,
      };
    case RECEIVE_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
