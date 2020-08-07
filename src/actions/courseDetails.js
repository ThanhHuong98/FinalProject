import { getUserInfo } from '../storage/storage';

/* eslint-disable import/prefer-default-export */
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
} from '../Constant/actions/courseDetails';

import api from '../api/api';

const getToken = async () => {
  const user = await getUserInfo();
  if (user) {
    return user.token;
  }
  return null;
};

const requestData = () => ({
  type: REQUEST_DATA,
}
);

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

const finishRequestData = () => ({
  type: FINISH_REQUEST_DATA,
});

const receiveCourseDetails = (data) => ({
  type: RECEIVE_COURSE_INFO,
  data,
});

const receiveCourseSection = (data) => ({
  type: RECEIVE_COURSE_SECTION,
  data,
});

const receiveLikeStatus = (data) => ({
  type: RECEIVE_LIKE_STATUS,
  data,
});

const receiveCurrentLesson = (data) => ({
  type: RECEIVE_CURRENT_LESSON,
  data,
});

const receiveLessonVideo = (data) => ({
  type: RECEIVE_LESSON_VIDEO,
  data,
});

const receiveProcess = (data) => ({
  type: RECEIVE_PROCESS,
  data,
});

export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestData());
  const AuthStr = 'Bearer '.concat(await getToken());
  const responseOwnCourse = await api.get(`/user/check-own-course/${courseId}`, { headers: { Authorization: AuthStr } });
  if (responseOwnCourse) {
    if (responseOwnCourse.data.payload.isUserOwnCourse) {
     // console.log('Owner Course: ', responseOwnCourse.data.payload.isUserOwnCourse);
      const response = await api.get(`/course/get-course-detail/${courseId}/null`);
      const responseLike = await api.get(`/user/get-course-like-status/${courseId}`, { headers: { Authorization: AuthStr } });
      const responseSection = await api.get(`/course/detail-with-lesson/${courseId}`, { headers: { Authorization: AuthStr } });
      const responseProcess = await api.get(`/course/process-course/${courseId}`, { headers: { Authorization: AuthStr } });
      if (response) {
       // console.log('Detail Course: ', response.data.payload);
        dispatch(receiveCourseDetails(response.data.payload));
        try {
        //  console.log('Current Lession', response.data.payload.section[0].lesson[0]);
          dispatch(receiveCurrentLesson(response.data.payload.section[0].lesson[0]));
          const responseLesson = await api.get(`/lesson/video/${courseId}/${response.data.payload.section[0].lesson[0].id}`, { headers: { Authorization: AuthStr } });
         // console.log('responseLesson ::', responseLesson);
          if (response) {
            dispatch(receiveLessonVideo(responseLesson.data.payload));
          }
        } catch (e) {
          dispatch(receiveCurrentLesson(null));
        }
      } else {
        dispatch(requestFailed());
      }

      if (responseLike) {
        dispatch(receiveLikeStatus(responseLike.data.likeStatus));
      } else {
        console.log('request like failed');
      }

      if (responseSection) {
        dispatch(receiveCourseSection(responseSection.data.payload.section));
      } else {
        console.log('request section failed');
      }

      if (responseProcess) {
        dispatch(receiveProcess(responseProcess.data.payload));
      }
    } else {
      dispatch(requestFailed());
    }
  } else {
    dispatch(requestFailed());
  }
  dispatch(finishRequestData());
};

export const changeLikeStatus = (dispatch) => async (courseId) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  const body = {
    courseId,
  };
  const response = await api.post('/user/like-course', body, { headers: { Authorization: AuthStr } });
  if (response) {
    dispatch(receiveLikeStatus(response.data.likeStatus));
  }
};

export const getLessonWithVideo = (dispatch) => async (courseId, lessonId) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  const response = await api.get(`/lesson/video/${courseId}/${lessonId}`, { headers: { Authorization: AuthStr } });
  if (response) {
    dispatch(receiveLessonVideo(response.data.payload));
  }
};
