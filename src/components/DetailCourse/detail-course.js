/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Share
} from 'react-native';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import { formatMonthYearType } from '../../utils/DateTimeUtils';
import ItemAuthorHorizontal from './item-athor';
import Content from './Content';
import CollapsableDescription from '../Common/Pannel/collapsable-description';
import { ScreenKey, Colors } from '../../Constant/Constant';
import { ThemeContext, LanguageContext } from '../../../App';
import { CourseDetailsContext } from '../providers/courseDetails';
import { checkYoutubeUrl, extractVideoIdFromYoutubeUrl } from '../../utils/CommonUtils';

const ItemFunction = ({ name, icon, color, onClick = (f) => f }) => (
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
  console.log('course click', course.id);
  useEffect(() => {
    courseDetailContext.getCourseInfo(course.id);
  }, []);
  console.log('lesson', courseDetailContext.state.currentLesson);
  // console.log('like: ', courseDetailContext.state.isLiked);
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

  const handleChangeLesson = (sectionId, lessonId) => {
    if (lessonId !== courseDetailContext.state.currentLesson.id) {
      courseDetailContext.changeCurrentLesson(course.id, sectionId, lessonId);
    }
  };
  console.log('Process: ', courseDetailContext.state.process);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
            ({ theme }) =>
              (
                <View style={{ ...styles.container, backgroundColor: theme.background }}>
                  {
                  courseDetailContext.state.courseInfo && courseDetailContext.state.currentLesson && courseDetailContext.state.currentLesson.videoUrl
                    ? (
                      <>
                        {
                        checkYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)
                          ? (
                            <YoutubePlayer
                              videoId={extractVideoIdFromYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)}
                              height={230}
                            />
                            // null
                          )
                          : (
                            // <Video
                            //   source={{ uri: courseDetailContext.state.currentLesson.videoUrl }}
                            //   resizeMode={Video.RESIZE_MODE_CONTAIN}
                            //   useNativeControls
                            //   style={styles.video}
                            // />
                            null
                          )
                      }
                        <ScrollView showsVerticalScrollIndicator={false}>
                          <View style={{ ...styles.infoCourseBlock, backgroundColor: theme.block }}>
                            <View style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              marginBottom: 10,
                            }}
                            >
                              <Text style={{ ...styles.title, color: theme.textColor }}>{courseDetailContext.state.courseInfo.title}</Text>
                              {/* <TouchableOpacity onPress={() => navigation.pop()}>
                                <Image source={require('../../../assets/common/close-icon.png')} style={styles.closeIcon} />
                              </TouchableOpacity> */}
                            </View>
                            <ItemAuthorHorizontal
                              name={courseDetailContext.state.courseInfo.instructor.name}
                              avatar={courseDetailContext.state.courseInfo.instructor.avatar}
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
                              {/* <StarRating
                                containerStyle={styles.ratingBar}
                                disabled
                                halfStarEnabled
                                halfStarColor="#fcba03"
                                maxStars={5}
                                rating={courseDetailContext.state.courseInfo.contentPoint}
                                fullStarColor="#fcba03"
                                emptyStarColor="#d4d4d4"
                                starSize={10}/> */}
                            </View>
                            <View style={styles.func}>
                              <View style={styles.functionContainer}>
                                <ItemFunction name={lang.Like} icon={iconLike} onClick={() => handleChangeLikeStatus()} color={theme.textColor} />
                                <ItemFunction
                                  name={lang.Share}
                                  icon={require('../../../assets/course-detail/share-icon.png')}
                                  onClick={() => handleShare()}
                                  color={theme.textColor}
                                />
                                <ItemFunction name={lang.Download} icon={require('../../../assets/course-detail/download-icon.png')}color={theme.textColor} />
                              </View>
                            </View>
                            <View style={styles.description}>
                              <CollapsableDescription description={courseDetailContext.state.courseInfo.description} />
                            </View>

                            <ButtonFunction
                              name={lang.RelatedCourses}
                              icon={require('../../../assets/course-detail/related-icon.png')}
                              onClick={(f) => f}
                            />
                          </View>
                          <View style={styles.progressBar}>
                            <ProgressBar progress={courseDetailContext.state.process} />
                          </View>
                          <View style={{ paddingHorizontal: 15 }}>
                            <Content
                              modules={courseDetailContext.state.sections}
                              playingLesson={courseDetailContext.state.currentLesson.id}
                              onClickLesson={(sectionId, lessonId) => handleChangeLesson(sectionId, lessonId)}
                            />
                          </View>
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
