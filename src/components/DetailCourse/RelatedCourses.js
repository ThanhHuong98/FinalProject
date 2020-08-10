/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import PropTypes from 'prop-types';
import { ThemeContext, LanguageContext } from '../../../App';
import { ScreenKey, Colors, FontSize } from '../../Constant/Constant';
import ListCourses from '../Courses/ListCourses/list-courses';

const RelatedCourse = ({ route, navigation }) => {
  const { course } = route.params;

  const onItemClick = (course) => {
    navigation.replace(ScreenKey.DetailScreen, { screen: ScreenKey.DetailCourse, params: { course } });
  };

  const handleBack = () => {
     navigation.pop();
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <LanguageContext>
          {
            ({ lang }) => (
              <TouchableOpacity onPress={() => handleBack()}>
                <Text style={{ ...styles.text, color: Colors.blue, marginLeft: 10, }}>{lang.Back}</Text>
              </TouchableOpacity>
            )
          }
        </LanguageContext>
      ),
    });
  }, [navigation]);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
        ({ theme }) => (
          <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            {
              course.coursesLikeCategory === 0
                ? (
                  <View style={styles.center}>
                    <Text style={styles.decription}>
                      {lang.NoCourses}
                    </Text>
                  </View>
                )
                : (
                  <ListCourses
                    title={lang.RelatedCourses}
                    courses={course.coursesLikeCategory}
                    onItemClick={(item) => onItemClick(item)}
                  />
                )
            }
          </SafeAreaView>
        )
      }
          </ThemeContext.Consumer>
        )
      }

    </LanguageContext.Consumer>
  );
};
RelatedCourse.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
    marginTop: 10,
  }
});


export default RelatedCourse;
