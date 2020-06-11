import React, { } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import { courses } from '../../../data/dataTest';
import { Colors } from '../../../Constant/Constant';
import CustomIcon from '../../../../assets/dog-food.svg';

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <ImageBackground
          style={styles.background}
          // eslint-disable-next-line global-require
          source={require('../../../../assets/ic_downloads.svg')}
        /> */}
        <CustomIcon width={120} height={120} style={{ fill: "#FF0000" }} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginLeft: 15,
    marginRight: 15,
  },
  background: {
    width: '100%',
    height: 100,
  }

});

export default Home;
