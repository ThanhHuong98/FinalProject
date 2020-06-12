import React, { } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
} from 'react-native';
// eslint-disable-next-line import/no-cycle
import SectionCourses from './SectionCourses/section-courses';
import { courses } from '../../../data/dataTest';
import { ScreenKey, Dimension } from '../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const Home = ({ navigation }) => {
  const onSetting = () => {
    navigation.navigate(ScreenKey.Setting);
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
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
      {
        ({ theme }) => {
          return (
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
              <ScrollView>
                {/* <ImageBackground
                  style={styles.background}
                  // eslint-disable-next-line global-require
                  source={require('../../../../assets/ic_downloads.svg')}
                /> */}
                <SectionCourses
                  title="Software Development"
                  data={courses.data}
                  navigation={navigation}
                />
                <SectionCourses
                  title="IT Operators"
                  data={courses.data}
                  navigation={navigation}
                />
                <SectionCourses
                  title="Data Professional"
                  data={courses.data}
                  navigation={navigation}
                />
              </ScrollView>
            </View>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

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
