import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import CoursesItem from '../CourseItem/course-item';
// import { separator } from '../../common/Separator/separator';
import { Colors } from '../../../Constant/Constant';
import { courses } from '../../../data/dataTest';

const ListCoursesItems = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses.data}
        renderItem={({ item }) => (
          <CoursesItem
            srcImage={item.srcImage}
            nameCourse={item.nameCourse}
            author={item.author}
            level={item.level}
            dateTime={item.dateTime}
            interval={item.interval}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListCoursesItems;