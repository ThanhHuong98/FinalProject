/* eslint-disable max-len */
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
  RECEIVE_OWN_COURSE_INFO,
  RECEIVE_USER_RATING,
  SEND_RATING_SUCCESS,
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

const receiveOwnCourseInfo = (data) => ({
  type: RECEIVE_OWN_COURSE_INFO,
  data,
});

const receiveUserRating = (data) => ({
  type: RECEIVE_USER_RATING,
  data,
});

export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestData());
  const AuthStr = 'Bearer '.concat(await getToken());
  const response = await api.get(`/course/get-course-detail/${courseId}/null`);
  const responseLike = await api.get(`/user/get-course-like-status/${courseId}`, { headers: { Authorization: AuthStr } });
  console.log('id course detail: ', courseId);
  if (response) {
    console.log('course detail: ', response.data.payload.section[0].lesson[0]);
    dispatch(receiveCourseDetails(response.data.payload));
    try {
      const recentLessonResponse = await api.get(`/course/last-watched-lesson/${courseId}`, { headers: { Authorization: AuthStr } });
      // console.log("recent lesson: ",recentLessonResponse);
      if (recentLessonResponse) {
        dispatch(receiveCurrentLesson({
          ...recentLessonResponse.data.payload,
          id: recentLessonResponse.data.payload.lessonId,
        }));
      } else {
        dispatch(receiveCurrentLesson(response.data.payload.section[0].lesson[0]));
        const responseLesson = await api.get(`/lesson/video/${courseId}/${response.data.payload.section[0].lesson[0].id}`, { headers: { Authorization: AuthStr } });
        if (responseLesson) {
          dispatch(receiveLessonVideo(responseLesson.data.payload));
        }
      }
    } catch (e) {
      if (response.data.payload.section[0].lesson[0]) dispatch(receiveCurrentLesson(response.data.payload.section[0].lesson[0]));
      else (dispatch(null));
    }
  } else {
    dispatch(requestFailed());
  }

  if (responseLike) {
    dispatch(receiveLikeStatus(responseLike.data.likeStatus));
  } else {
    console.log('request like failed');
  }

  const checkOwnCourse = await api.get(`/user/check-own-course/${courseId}`, { headers: { Authorization: AuthStr } });
  console.log('check ownwner course: ', checkOwnCourse.data.payload.isUserOwnCourse);
  if (checkOwnCourse) {
    let ownCourseInfo = checkOwnCourse.data.payload.isUserOwnCourse;

    if (!ownCourseInfo && response && response.data.payload.price === 0) {
      const data = {
        courseId,
      };
      const responseGetFreeCourse = await api.post('/payment/get-free-courses', data, { headers: { Authorization: AuthStr } });
      console.log('check free course: ', responseGetFreeCourse);
      if (responseGetFreeCourse) {
        ownCourseInfo = true;
      } else {
        ownCourseInfo = false;
      }
    }

    dispatch(receiveOwnCourseInfo(ownCourseInfo));

    if (ownCourseInfo) {
      const responseSection = await api.get(`/course/detail-with-lesson/${courseId}`, { headers: { Authorization: AuthStr } });
      const responseProcess = await api.get(`/course/process-course/${courseId}`, { headers: { Authorization: AuthStr } });

      if (responseSection) {
        dispatch(receiveCourseSection(responseSection.data.payload.section));
      } else {
        console.log('request section failed');
      }

      if (responseProcess) {
        dispatch(receiveProcess(responseProcess.data.payload));
      }
    }
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

export const updateLessonStatus = (dispatch) => async (lessonId) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  const data = {
    lessonId,
  };
  api.post('/lesson/update-status', data, { headers: { Authorization: AuthStr } });
};

export const updateLearningTime = () => async (lessonId, currentTime) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  console.log('update time', currentTime);
  if (!Number.isNaN(currentTime)) {
    const data = {
      lessonId,
      currentTime,
    };
    await api.put('/lesson/update-current-time-learn-video', data, { headers: { Authorization: AuthStr } });
  }
};

export const fetchUserRating = (dispatch) => async (courseId) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  const response = await api.get(`/course/get-rating/${courseId}`, { headers: { Authorization: AuthStr } });
  if (response) {
    dispatch(receiveUserRating(response.payload));
  } else {
    console.log('request failed');
  }
};

export const sendUserRating = (dispatch) => async (courseId, ratingContent) => {
  const AuthStr = 'Bearer '.concat(await getToken());
  const data = {
    courseId,
    contentPoint: ratingContent.contentPoint,
    content: ratingContent.content,
  };

  const response = await api.post('/course/rating-course', data, { headers: { Authorization: AuthStr } });
  if (response) {
    console.log('send rating success', response.payload);
    dispatch({
      type: SEND_RATING_SUCCESS,
      data: response.payload,
    });
  }
};
