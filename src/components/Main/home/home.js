/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import SectionCourses from './SectionCourses/section-courses';
import { ScreenKey, Dimension } from '../../../Constant/Constant';
import { ThemeContext, LanguageContext } from '../../../../App';

import { HomeContext } from '../../providers/home';
import IconProfile from '../../../../assets/home/user.svg';
import IconSetting from '../../../../assets/home/settings.svg';

function Home({ navigation }) {
  const onSetting = () => {
    navigation.navigate(ScreenKey.Setting);
  };
  const onProfile = () => {
    navigation.navigate(ScreenKey.ProfileMain);
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <TouchableOpacity onPress={() => onProfile()}>
              <IconProfile width={25} height={25} marginHorizontal={15} style={{ fill: theme.iconColor }} />
            </TouchableOpacity>
          )}
        </ThemeContext.Consumer>
      ),
      headerLeft: () => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <TouchableOpacity onPress={() => onSetting()}>
              <IconSetting width={25} height={25} marginHorizontal={15} style={{ fill: theme.iconColor }} />
            </TouchableOpacity>
          )}
        </ThemeContext.Consumer>
      ),
    });
  }, [navigation]);

  const onSeeAll = (category, title) => {
    navigation.navigate(ScreenKey.AllCourses, { category, title });
  };
  const onClickCourse = (course) => {
    navigation.push(ScreenKey.DetailScreen, { screen: ScreenKey.DetailCourse, params: { course } });
  };

  const homeContext = useContext(HomeContext);
  useEffect(() => {
    homeContext.getDataHomeScreen();
  }, []);
  return (
    <ThemeContext.Consumer>
      { ({ theme }) => (
        <LanguageContext.Consumer>
          {
            ({ lang }) => (
              <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <ScrollView>
                  <SectionCourses
                    title={lang.Recommended}
                    courses={homeContext.state.homeScreen.recommended}
                    onSeeAll={() => onSeeAll('RECOMMENDED', lang.Recommended)}
                    onClickCourse={(course) => onClickCourse(course)}
                  />
                  <SectionCourses
                    title={lang.NewCourses}
                    courses={homeContext.state.homeScreen.topNew}
                    onSeeAll={() => onSeeAll('TOP_NEW', lang.NewCourses)}
                    onClickCourse={(course) => onClickCourse(course)}
                  />
                  <SectionCourses
                    title={lang.TopSell}
                    courses={homeContext.state.homeScreen.topSell}
                    onSeeAll={() => onSeeAll('TOP_SELL', lang.TopSell)}
                    onClickCourse={(course) => onClickCourse(course)}
                  />
                  <SectionCourses
                    title={lang.TopRate}
                    courses={homeContext.state.homeScreen.topRate}
                    onSeeAll={() => onSeeAll('TOP_RATE', lang.TopRate)}
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

            )
          }
        </LanguageContext.Consumer>
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
  },
  iconHeader: {
    height: 20,
    marginHorizontal: 15,
    width: 20,
  }
});

export default Home;
