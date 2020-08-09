/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import PropTypes from 'prop-types';
import { ThemeContext, LanguageContext } from '../../../App';
import { HomeContext } from '../providers/home';
import { ScreenKey, Colors, FontSize } from '../../Constant/Constant';
import ListCourses from './ListCourses/list-courses';

const AllCourses = ({ route, navigation }) => {
  const selectedCategory = route.params.category;
  const selectedTitle = route.params.title;

  const homeContext = useContext(HomeContext);

  const onItemClick = (course) => {
    navigation.push(ScreenKey.DetailScreen, { screen: ScreenKey.DetailCourse, params: { course } });
  };
  useEffect(() => {
    homeContext.getAllCourse(selectedCategory);
  }, []);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
        ({ theme }) => (
          <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            {
              homeContext.state.allCourse.length === 0
                ? (
                  <View style={styles.center}>
                    <Text style={styles.decription}>
                      {lang.NoCourses}
                    </Text>
                  </View>
                )
                : (
                  <ListCourses
                    title={selectedTitle}
                    courses={homeContext.state.allCourse}
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
AllCourses.propTypes = {
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


export default AllCourses;
