/* eslint-disable no-mixed-operators */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, {
  useContext, useEffect, useRef, useState
} from 'react';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Share, Linking
} from 'react-native';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import Star from 'react-native-star-view';
import * as FileSystem from 'expo-file-system';
import { formatMonthYearType } from '../../utils/DateTimeUtils';
import ItemAuthorHorizontal from './item-athor';
import Content from './Content';
import CollapsableDescription from '../Common/Pannel/collapsable-description';
import { ScreenKey, Colors, themes } from '../../Constant/Constant';
import { ThemeContext, LanguageContext } from '../../../App';
import { CourseDetailsContext } from '../providers/courseDetails';
import { checkYoutubeUrl, extractVideoIdFromYoutubeUrl } from '../../utils/CommonUtils';
import Rating from './Rating';

const ItemFunction = ({
  name, icon, color, onClick = (f) => f
}) => (
  <View style={styles.itemFunctionContainer}>
    <TouchableOpacity style={styles.iconFunctionContainer} onPress={() => onClick()}>
      <Image source={icon} style={styles.iconFunction} />
    </TouchableOpacity>
    <Text style={{ ...styles.nameFunction, color }}>{name}</Text>
  </View>
);

const ButtonFunction = ({ name, icon, onClick = (f) => f }) => (
  <TouchableOpacity style={styles.btnContainer} onPress={() => onClick()}>
    <Image source={icon} style={styles.iconFunction} />
    <Text style={{ ...styles.nameFunction, marginLeft: 5 }}>{name}</Text>
  </TouchableOpacity>
);

const ProgressBar = ({ progress }) => {
  const progressColor = progress === 100 ? 'green' : 'yellow';
  return (
    <View style={styles.progressContainer}>
      <View style={{ ...styles.progress, width: `${progress}%`, backgroundColor: progressColor }} />
    </View>
  );
};

const DetailCourse = ({
  route, navigation,
}) => {
  const { course } = route.params;
  const courseDetailContext = useContext(CourseDetailsContext);
  const [selectedTab, setSelectedTab] = useState(1);
  const [downloadProgress, setDownloadProgress] = useState('Download');
  const youtubeRef = useRef();
  let expoRef;
  let seeked = false;
  const [isFinishLesson, setIsFinishLesson] = useState(false);
  useEffect(() => {
    courseDetailContext.getCourseInfo(course.id);
  }, []);

  useEffect(() => {
    if (courseDetailContext.state.courseInfo) {
      courseDetailContext.getUserRating(courseDetailContext.state.courseInfo.id);
    }
  }, [courseDetailContext.state.courseInfo]);
  // console.log('lesson', courseDetailContext.state.currentLesson);
  const iconLike = courseDetailContext.state.isLiked ? require('../../../assets/course-detail/like-fill-icon.png') : require('../../../assets/course-detail/like-icon.png');
  const handleChangeLikeStatus = () => {
    courseDetailContext.changeLikeStatus(course.id);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  async function saveCurrentTime() {
    if (courseDetailContext.state.currentLesson && courseDetailContext.state.isOwnCourse) {
      if (!checkYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)) {
        const status = await expoRef.getStatusAsync();
        courseDetailContext.updateLearningTime(courseDetailContext.state.currentLesson.id, status.positionMillis / 1000);
      } else {
        const currentTime = await youtubeRef.current.getCurrentTime();
        courseDetailContext.updateLearningTime(courseDetailContext.state.currentLesson.id, currentTime);
      }
    }
    navigation.pop();
  }
  const handleChangeLesson = (sectionId, lessonId) => {
    if (lessonId !== courseDetailContext.state.currentLesson.id) {
      courseDetailContext.changeCurrentLesson(course.id, sectionId, lessonId);
    }
  };

  const handlePlayback = (component) => {
    if (component) {
      expoRef = component;
      component.loadAsync({ uri: courseDetailContext.state.currentLesson.videoUrl });
    }
  };

  const handlePlayVideo = (status) => {
    if (status) {
      if (status.isLoaded) {
        if (!seeked) {
          expoRef.setStatusAsync({ shouldPlay: true, positionMillis: courseDetailContext.state.currentLesson.currentTime * 1000 });
          seeked = true;
        }
      }
      if (!courseDetailContext.state.currentLesson.isFinish && status.positionMillis >= Math.floor(status.durationMillis * 95 / 100)) {
        courseDetailContext.updateLessonStatus(courseDetailContext.state.currentLesson.id);
      }
    }
  };

  const handlePayment = () => {
    const url = `https://itedu.me/payment/${courseDetailContext.state.courseInfo.id}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${url}`);
      }
    });
  };

  const handleRelatedCourses = () => {
    navigation.navigate(ScreenKey.RelatedCourse, { course: courseDetailContext.state.courseInfo });
  };
  const handleSendRating = (rating) => {
    console.log('send rating: ', rating);
    if (rating) {
      courseDetailContext.sendRating(courseDetailContext.state.courseInfo.id, rating);
    }
  };
  const updateProgress = (progress) => {
    const progressPer = Math.round(progress.totalBytesWritten * 100 / progress.totalBytesExpectedToWrite);
    setDownloadProgress(`${progressPer}%`);
    console.log('progress: ', progressPer);
  };

  const handleDownloadCourse = async () => {
    if (courseDetailContext.state.currentLesson
      && courseDetailContext.state.isOwnCourse
      && !checkYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)) {
      const downloadResumable = FileSystem.createDownloadResumable(
        courseDetailContext.state.currentLesson.videoUrl,
        `${FileSystem.documentDirectory}${new Date().toISOString()}.mp4`,
        {},
        updateProgress
      );

      try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
      } catch (e) {
        console.error(e);
      }
    }
  };
  console.log('isOwnCourse: ', courseDetailContext.state.isOwnCourse);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            {
              courseDetailContext.state.courseInfo && courseDetailContext.state.currentLesson && courseDetailContext.state.currentLesson.videoUrl
                ? (
                  <>
                    {
                    courseDetailContext.state.isOwnCourse
                      ? (
                        checkYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)
                          ? (
                            <YoutubePlayer
                              ref={youtubeRef}
                              videoId={extractVideoIdFromYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)}
                              height={230}
                              onChangeState={(state) => {
                                if (state === 'buffering' && !seeked) {
                                  youtubeRef.current.seekTo(courseDetailContext.state.currentLesson.currentTime);
                                  seeked = true;
                                }
                              }}
                              onPlaybackRateChange={(e) => console.log('playback rate change: ', e)}
                            />
                          )
                          : (
                            <Video
                              ref={handlePlayback}
                              resizeMode={Video.RESIZE_MODE_CONTAIN}
                              useNativeControls
                              usePoster
                              posterSource={{ uri: courseDetailContext.state.courseInfo.imageUrl }}
                              style={styles.video}
                              onPlaybackStatusUpdate={(status) => handlePlayVideo(status)}
                            />
                          )
                      )
                      : (
                        <Image
                          source={{ uri: courseDetailContext.state.courseInfo.imageUrl }}
                          style={{ height: 230 }}
                          resizeMode="cover"
                        />
                      )
                  }
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={styles.infoCourseBlock}>
                        <View style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: 10,
                        }}
                        >
                          <Text style={{ ...styles.title, color: theme.textColor }}>{courseDetailContext.state.courseInfo.title}</Text>
                          <TouchableOpacity onPress={() => saveCurrentTime()}>
                            {
                              theme === themes.dark
                                ? (
                                  <Image source={require('../../../assets/common/close-icon.png')} style={styles.closeIcon} />
                                )
                                : (
                                  <Image source={require('../../../assets/common/close-icon-dark.png')} style={styles.closeIcon} />
                                )
                            }

                          </TouchableOpacity>
                        </View>
                        <ItemAuthorHorizontal
                          name={courseDetailContext.state.courseInfo.instructor.name}
                          avatar={courseDetailContext.state.courseInfo.instructor.avatar}
                          onItemClick={() =>
                            navigation.navigate(ScreenKey.DetailAuthor, { id: courseDetailContext.state.courseInfo.instructor.id })}
                        />
                        <View style={styles.infoBlock}>
                          <Text style={styles.info}>
                            {formatMonthYearType(courseDetailContext.state.courseInfo.updatedAt)}
                            {' '}
                            ∙
                            {courseDetailContext.state.courseInfo.videoNumber}
                            {' '}
                            video(s) ∙
                            {courseDetailContext.state.courseInfo.totalHours}
                            h ∙
                          </Text>
                        </View>
                        <Star score={courseDetailContext.state.courseInfo.contentPoint > 5 ? 5 : courseDetailContext.state.courseInfo.contentPoint} style={styles.starStyle} />
                        <View style={styles.func}>
                          <View style={styles.functionContainer}>
                            <ItemFunction name={lang.Like} icon={iconLike} onClick={() => handleChangeLikeStatus()} />
                            <ItemFunction
                              name={lang.Share}
                              icon={require('../../../assets/course-detail/share-icon.png')}
                              onClick={() => handleShare()}
                            />
                            <ItemFunction name={downloadProgress} icon={require('../../../assets/course-detail/download-icon.png')} onClick={() => handleDownloadCourse()} />
                          </View>
                        </View>
                        <View style={styles.description}>
                          <CollapsableDescription description={courseDetailContext.state.courseInfo.description} />
                        </View>

                        <ButtonFunction
                          name={lang.RelatedCourses}
                          icon={require('../../../assets/course-detail/related-icon.png')}
                          onClick={() => handleRelatedCourses()}
                        />
                      </View>

                      {
                        courseDetailContext.state.isOwnCourse
                          ? (
                            <>
                              <View style={styles.progressBar}>
                                <ProgressBar progress={courseDetailContext.state.process} />
                              </View>
                              <View style={styles.tabContainer}>
                                <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(1)}>
                                  <Text
                                    style={selectedTab === 1 ? styles.selectedTabText : { ...styles.tabText, color: theme.textColor }}
                                  >
                                    {lang.Lesson}
                                  </Text>
                                </TouchableOpacity>
                                <View style={{ height: '100%', width: 2, backgroundColor: theme.textColor }} />
                                <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(2)}>
                                  <Text
                                    style={selectedTab === 2 ? styles.selectedTabText : { ...styles.tabText, color: theme.textColor }}
                                  >
                                    {lang.Rating}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{ paddingHorizontal: 15 }}>
                                {
                                selectedTab === 1
                                  ? (
                                    <Content
                                      modules={courseDetailContext.state.sections}
                                      playingLesson={courseDetailContext.state.currentLesson.id}
                                      onClickLesson={(sectionId, lessonId) => handleChangeLesson(sectionId, lessonId)}
                                    />
                                  )
                                  : (
                                    <>
                                      <View style={{ height: 20 }} />
                                      <Rating
                                        // user={null}
                                        userRating={courseDetailContext.state.userRating}
                                        listRating={courseDetailContext.state.courseInfo.ratings.ratingList}
                                        onSendRating={(ratingContent) => handleSendRating(ratingContent)}
                                      />
                                      <View style={{ height: 50 }} />
                                    </>
                                  )
                              }
                              </View>
                            </>
                          )
                          : (
                            <View style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignSelf: 'center',
                              padding: 20,
                            }}
                            >
                              <Text style={{
                                fontSize: 13,
                                color: theme.textColor,
                                textAlign: 'center',
                              }}
                              >
                                {lang.Payment}
                              </Text>
                              <TouchableOpacity
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  paddingHorizontal: 15,
                                  paddingVertical: 10,
                                  borderRadius: 10,
                                  backgroundColor: '#006DF0',
                                  alignSelf: 'center',
                                  alignItems: 'center',
                                  marginTop: 15,
                                }}

                                onPress={() => handlePayment()}
                              >
                                <Image
                                  source={require('../../../assets/course-detail/buy-icon.png')}
                                  style={{ width: 17, height: 17 }}
                                />
                                <Text style={{
                                  fontSize: 15,
                                  fontWeight: '500',
                                  color: Colors.white,
                                  marginLeft: 5,
                                }}
                                >
                                  {lang.Buy}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          )
                      }
                    </ScrollView>
                  </>
                )
                : (
                  <AnimatedLoader
                    visible={courseDetailContext.state.isLoading}
                    overlayColor="rgba(0,0,0,0.65)"
                    source={require('../../../assets/common/loader.json')}
                    animationStyle={styles.loading}
                    speed={2}
                  />
                  // <Image
                  //         source={{ uri: courseDetailContext.state.courseInfo.imageUrl }}
                  //         style={{ height: 230 }}
                  //         resizeMode="cover"
                  //       />
                  // <Text>sdfghjkl;mnbcfyuidef</Text>
                )
            }
          </View>
        )
      }
          </ThemeContext.Consumer>

        )
      }
    </LanguageContext.Consumer>
  );
};

const styles = StyleSheet.create({
  authorSeparator: {
    width: 5,
  },
  backIcon: {
    alignItems: 'flex-start',
    height: 25,
    justifyContent: 'flex-start',
    left: 5,
    position: 'absolute',
    top: 5,
    width: 25,
    zIndex: 9,
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 8,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  closeIcon: {
    width: 15,
    height: 15,
    marginTop: 10,
  },
  description: {
    marginBottom: 15,
    width: '100%',
  },
  functionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 25,
  },
  iconFunction: {
    height: 20,
    width: 20,
  },
  loading: {
    height: 100,
    width: 100,
  },
  iconFunctionContainer: {
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    marginBottom: 7,
    width: 40,
  },
  info: {
    color: Colors.lightGray,
    fontSize: 12,
    marginTop: 10,
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  infoCourseBlock: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
    padding: 15,
    position: 'relative',
  },
  itemFunctionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameFunction: {
    color: Colors.white,
    fontSize: 14,
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: '500',
    marginRight: 20,
  },
  video: {
    height: 220,
  },
  ratingBar: {
    backgroundColor: Colors.transparent,
    marginRight: 5,
    marginHorizontal: 3,
    marginTop: 10,
  },
  progress: {
    height: '100%',
  },
  progressBar: {
    height: 4,
    width: '100%',
  },
  progressContainer: {
    backgroundColor: Colors.lightGray,
    height: '100%',
    width: '100%',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginTop: 3,
  },
  selectedTabText: {
    color: Colors.blue,
    fontSize: 17,
    fontWeight: 'bold',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  tabText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

ItemFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};
ButtonFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};

DetailCourse.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default DetailCourse;
