/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import courseDetailsReducer from '../../reducers/courseDetail';
import {
  fetchCourseInfo, changeLikeStatus, getLessonWithVideo, updateLessonStatus, updateLearningTime, fetchUserRating, sendUserRating 
} from '../../actions/courseDetails';
import { CHANGE_CURRENT_LESSON, REQUEST_DATA, FINISH_REQUEST_DATA } from '../../Constant/actions/courseDetails';

const CourseDetailsContext = React.createContext();

const initialState = {
  isLoading: false,
  courseInfo: null,
  isLiked: false,
  currentLesson: null,
  sections: [],
  process: 0,
  isOwnCourse: false,
};

const CourseDetailsProvider = (props) => {
  const [state, dispatch] = useReducer(courseDetailsReducer, initialState);
  const changeCurrentLesson = (courseId, sectionId, lessonId) => {
    const section = state.sections.find((item) => item.id === sectionId);
    if (section) {
      const lesson = section.lesson.find((item) => item.id === lessonId);
      if (lesson) {
        dispatch({
          type: CHANGE_CURRENT_LESSON,
          data: lesson,
        });
        getLessonWithVideo(dispatch)(courseId, lessonId);
      }
    }
  };
  return (
    <CourseDetailsContext.Provider value={{
      state,
      getCourseInfo: fetchCourseInfo(dispatch),
      getUserRating: fetchUserRating(dispatch),
      sendRating: sendUserRating(dispatch),
      changeLikeStatus: changeLikeStatus(dispatch),
      getLessonVideo: getLessonWithVideo(dispatch),
      updateLessonStatus: updateLessonStatus(dispatch),
      updateLearningTime: updateLearningTime(dispatch),
      changeCurrentLesson,
    }}
    >
      {props.children}
    </CourseDetailsContext.Provider>
  );
};

export { CourseDetailsContext, CourseDetailsProvider };
