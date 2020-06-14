import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
} from 'react-native';
// eslint-disable-next-line import/no-cycle
import SectionCourses from './SectionCourses/section-courses';
import { ScreenKey, Dimension } from '../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext, CoursesContext } from '../../../../App';

function Home({ navigation }) {
  const onSetting = () => {
    navigation.navigate(ScreenKey.Setting);
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   backgroundColor: themHeader,
      // },
      headerRight: () => (
        <Button
          onPress={onSetting}
          title="Setting"
        />
      ),
    });
  }, [navigation]);

  return (
    <ThemeContext.Consumer>
      { ({theme}) => (
        // console.log("Theme: ", theme ),
        <CoursesContext.Consumer>
          {({ sectionCourse }) => (
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
              <ScrollView>
                <SectionCourses
                  title={sectionCourse.title}
                  data={sectionCourse.courses}
                  navigation={navigation}
                />
                <SectionCourses
                  title={sectionCourse.title}
                  data={sectionCourse.courses}
                  navigation={navigation}
                />
                <SectionCourses
                  title={sectionCourse.title}
                  data={sectionCourse.courses}
                  navigation={navigation}
              />
              </ScrollView>
            </View>
          )}
        </CoursesContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: Dimension.paddingMedium,
  },
  background: {
    width: '100%',
    height: 100,
  }
});

export default Home;
