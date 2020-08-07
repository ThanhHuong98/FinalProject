import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_COURSE_INFO,
  RECEIVE_LIKE_STATUS,
  RECEIVE_CURRENT_LESSON,
  RECEIVE_LESSON_VIDEO,
  FINISH_REQUEST_DATA,
  RECEIVE_COURSE_SECTION,
  RECEIVE_PROCESS,
  CHANGE_CURRENT_LESSON,
} from '../Constant/actions/courseDetails';

const courseDetailsReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        courseInfo: null,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case FINISH_REQUEST_DATA:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_COURSE_INFO:
      return {
        ...state,
        courseInfo: action.data,
      };
    case RECEIVE_COURSE_SECTION:
      return {
        ...state,
        sections: action.data,
      };
    case RECEIVE_PROCESS:
      return {
        ...state,
        process: action.data,
      };
    case RECEIVE_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.data,
      };
    case RECEIVE_LIKE_STATUS:
      return {
        ...state,
        isLiked: action.data,
      };
    case CHANGE_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.data,
      };
    case RECEIVE_LESSON_VIDEO:
      return {
        ...state,
        currentLesson: {
          ...state.currentLesson,
          videoUrl: action.data.videoUrl,
          currentTime: action.data.currentTime,
          isFinish: action.data.isFinish,
        },
      };
    default:
      return state;
  }
};

export default courseDetailsReducer;
