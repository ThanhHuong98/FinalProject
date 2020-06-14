import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
// eslint-disable-next-line import/no-cycle
import SectionCoursesItem from '../CoursesItem/courses-item';
import { ScreenKey, Colors } from '../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import SectionTitle from '../../../common/SectionTitle/section-title';

const SectionCourses = ({ title, data, navigation }) => {
  const onSeeMore = () => {
    navigation.navigate(ScreenKey.ListCourse);
  };

  const onDetailCourse = () => {
    navigation.navigate(ScreenKey.DetailCourse);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle
        title={title}
        onChooseOption={onSeeMore}
      />
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SectionCoursesItem
            thumbnail={item.thumbnail}
            name={item.name}
            authors={item.authors}
            level={item.level}
            date={item.date}
            duration={item.duration}
            rating={item.rating}
            onChooseOption={onDetailCourse}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
  displayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SectionCourses;
