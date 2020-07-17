/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import {
  View, Text, Image, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CollapsableDescription from '../../../../Common/Pannel/collapsable-description';
import ListCourses from '../../../../Courses/ListCourses/list-courses';
import { ScreenKey, Colors } from '../../../../../Constant/Constant';
import { ThemeContext } from '../../../../../../App';
import { AuthorContext } from '../../../../providers/author';
import ListSkills from '../../PopularSkill/ListSkills/list-skills';

const DetailAuthor = ({
  route, navigation,
}) => {
  
  const authorId = route.params.id;
  const authorContext = useContext(AuthorContext);
  useEffect(() => {
    authorContext.getAuthorDetails(authorId);
  }, []);

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
              <View style={{ ...styles.infoBlock, backgroundColor: theme.background }}>
                <Image source={{ uri: authorContext.state.authorDetails.avatar }} style={styles.avatar} resizeMode="cover" />
                <Text style={{ ...styles.name, color: theme.textColor }}>{authorContext.state.authorDetails.name}</Text>
                {
                  authorContext.state.authorDetails.intro
                    ? <CollapsableDescription minHeight={100} description={authorContext.state.authorDetails.intro} />
                    : null
                }
                <View style={styles.subInfoContainer}>
                  <Image source={require('../../../../../../assets/author/email.png')} style={styles.socialIcon} />
                  <Text style={{ ...styles.subInfo, color: theme.textColor }}>{authorContext.state.authorDetails.email}</Text>
                </View>
                <View style={styles.subInfoContainer}>
                  <Image source={require('../../../../../../assets/author/ursa-major.png')} style={styles.socialIcon} />
                  <Text style={{ ...styles.subInfo, color: theme.textColor }}>{authorContext.state.authorDetails.major}</Text>
                </View>
              </View>
              <View style={styles.listSkills}>
                <ListSkills
                  skills={authorContext.state.authorDetails.skills}
                />
              </View>
              <View style={styles.listCourses}>
                <ListCourses
                  courses={authorContext.state.authorDetails.courses}
                  title="Các khóa học"
                  onItemClick={(id) => navigation.push(ScreenKey.DetailCourse)}
                />
              </View>
            </View>
          </ScrollView>
        )
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
    borderColor: Colors.blue,
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
    color: Colors.gray,
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
  },
  subInfo: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  listCourses: {
  },
  listSkills: {
    marginLeft: 15,
  },
  name: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  subInfoContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  socialIcon: {
    height: 20,
    marginRight: 20,
    width: 20,
  },

});

DetailAuthor.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

DetailAuthor.defaultProps = {
};

export default DetailAuthor;
