/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, TouchableWithoutFeedback, Image, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../../../../temp/color';
import CollapsableDescription from '../../../../common/Pannel/CollapsableDescription';
import ListCourses from '../../../../Courses/ListCourses/list-courses';
import { ScreenKey, Colors } from '../../../../../Constant/Constant';
import { ThemeContext } from '../../../../../../App';

const DetailAuthor = ({
  name, avatar, isFollowing, desc, personalLink, courses, navigation,
}) => {
  const buttonBackground = isFollowing ? colorSource.transparent : colorSource.blue;
  const buttonTextColor = isFollowing ? colorSource.blue : colorSource.white;

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ ...styles.container, backgroundColor: theme.background}}>
                <View style={{ ...styles.infoBlock, backgroundColor: theme.background}}>
                  <Image source={{ uri: avatar }} style={styles.avatar} resizeMode='cover'/>
                  <Text style={{ ...styles.name, color: theme.textColor }}>{name}</Text>
                  <TouchableWithoutFeedback>
                    <Text style={{ ...styles.btnFollow, backgroundColor: buttonBackground, color: buttonTextColor }}>{isFollowing ? 'FOLLOWING' : 'FOLLOW'}</Text>
                  </TouchableWithoutFeedback>
                  <Text style={styles.followDesc}>You'll be notified when new courses are published</Text>
                  <CollapsableDescription minHeight={100} description={desc}/>
                  <View style={styles.socialContainer}>
                    <Image source={require('../../../../../temp/assets/author/link-icon.png')} style={styles.icon}/>
                    <Text style={{ ...styles.link, color: theme.textColor }}>{personalLink}</Text>
                  </View>
                  <View style={styles.socialContainer}>
                    <Image source={require('../../../../../temp/assets/author/facebook-icon.png')} style={styles.socialIcon}/>
                    <Image source={require('../../../../../temp/assets/author/linkedin-icon.png')} style={styles.socialIcon}/>
                  </View>
                </View>
                <View style={styles.listCourses}>
                  <ListCourses title='Courses' onItemClick={(id) => navigation.push(ScreenKey.DetailCourse)}/>
                </View>
              </View>
            </ScrollView>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  btnFollow: {
    borderColor: colorSource.blue,
    borderRadius: 3,
    borderWidth: 2,
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 8,
    textAlign: 'center',
  },
  container: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
    height: '100%',
    paddingTop: 20,
    width: '100%',
  },
  followDesc: {
    color: colorSource.gray,
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 15,
  },
  icon: {
    height: 15,
    marginRight: 10,
    width: 15,
  },
  infoBlock: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
    marginHorizontal: 15,
    padding: 15,
  },
  link: {
    color: colorSource.white,
    fontSize: 15,
    fontWeight: '500',
  },
  listCourses: {
    // height: '100%',
    // marginTop: 20,
    // paddingHorizontal: 15,
  },
  name: {
    color: colorSource.white,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  socialContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 15,
  },
  socialIcon: {
    height: 20,
    marginRight: 20,
    width: 20,
  },

});

DetailAuthor.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isFollowing: PropTypes.bool,
  desc: PropTypes.string,
  personalLink: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};

DetailAuthor.defaultProps = {
  name: 'Scott Allen',
  avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
  isFollowing: false,
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
  personalLink: 'http://odetocode.com/blogs/all',
  courses: [],
};

export default DetailAuthor;



// DetailAuthor