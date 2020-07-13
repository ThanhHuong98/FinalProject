/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import SectionCourses from './SectionCourses/section-courses';
import { ScreenKey, Dimension } from '../../../Constant/Constant';
import { ThemeContext } from '../../../../App';
import { HomeContext } from '../../providers/home';

function Home({ navigation }) {
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

  const onSeeAll = (category, title) => {
    navigation.navigate(ScreenKey.AllCourses, { category, title });
  };
  const onClickCourse = (course) => {
    navigation.navigate(ScreenKey.DetailCourse, { course });
  };

  const homeContext = useContext(HomeContext);
  useEffect(() => {
    homeContext.getDataHomeScreen();
  }, []);

  return (
    <ThemeContext.Consumer>
      { ({ theme }) => (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
          <ScrollView>
            <SectionCourses
              title="Có thể bạn quan tâm"
              courses={homeContext.state.homeScreen.recommended}
              onSeeAll={() => onSeeAll('RECOMMENDED', 'Có thể bạn quan tâm')}
              onClickCourse={(course) => onClickCourse(course)}
            />
            <SectionCourses
              title="Các khóa học mới"
              courses={homeContext.state.homeScreen.topNew}
              onSeeAll={() => onSeeAll('TOP_NEW', 'Các khóa học mới')}
              onClickCourse={(course) => onClickCourse(course)}
            />
            <SectionCourses
              title="Bán chạy nhất"
              courses={homeContext.state.homeScreen.topSell}
              onSeeAll={() => onSeeAll('TOP_SELL', 'Bán chạy nhất')}
              onClickCourse={(course) => onClickCourse(course)}
            />
            <SectionCourses
              title="Đánh giá cao nhất"
              courses={homeContext.state.homeScreen.topRate}
              onSeeAll={() => onSeeAll('TOP_RATE', 'Đánh giá cao nhất')}
              onClickCourse={(course) => onClickCourse(course)}
            />
          </ScrollView>
          <AnimatedLoader
            visible={homeContext.state.isLoading}
            overlayColor="rgba(0,0,0,0.65)"
            source={require('../../../../assets/common/loader.json')}
            animationStyle={styles.loading}
            speed={2}
          />
        </View>
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
  },
  lottie: {
    width: 100,
    height: 100,
  }
});

export default Home;
