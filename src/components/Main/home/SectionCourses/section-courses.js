/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
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
import SectionTitle from '../../../Common/SectionTitle/section-title';

const SectionCourses = ({
  id, title, courses, onSeeAll, onClickCourse,
}) =>
  (
    <SafeAreaView style={styles.container}>
      <SectionTitle
        title={title}
        onChooseOption={() => onSeeAll()}
      />
      <FlatList
        horizontal
        data={courses}
        renderItem={({ item }) => (
          <SectionCoursesItem
            name={item.title}
            thumbnail={item.imageUrl}
            author={item['instructor.user.name']}
            numOfVideos={item.videoNumber}
            date={item.date}
            duration={item.totalHours}
            rating={item.contentPoint}
            price={item.price}
            onClickItem={() => onClickCourse(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
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
