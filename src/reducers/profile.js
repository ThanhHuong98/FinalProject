
import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE_SUCCESS,
  RECEIVE_PROFILE_FAILED,

  REQUEST_UPDATE_PROFILE,
  RECEIVE_RESULT_UPLOAD,

  REQUEST_UPLOAD_AVATAR,
  RECEIVE_URL,

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
    case REQUEST_UPDATE_PROFILE:
      return {
        ...state,
        isLoading: true,
        uploadStatus: 0,
      };
    case RECEIVE_RESULT_UPLOAD:
      return {
        ...state,
        isLoading: false,
        uploadStatus: action.status,
      };
    case REQUEST_UPLOAD_AVATAR:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_URL:
      return {
        ...state,
        isLoading: false,
        urlAvatar: action.url,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
