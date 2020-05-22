import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Colors } from '../../../Constant/Constant';
import { courses } from '../../../data/dataTest';
import CoursesItem from '../CourseItem/course-item';
import separator from '../../common/Separator/separator-bottom';

const ListCoursesItems = ({ navigation }) => {
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
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={separator}
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
