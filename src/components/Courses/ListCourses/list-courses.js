import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { courses } from '../../../data/dataTest';
// eslint-disable-next-line import/no-cycle
import CoursesItem from '../CourseItem/course-item';
import separator from '../../common/Separator/separator-bottom';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const ListCoursesItems = ({ navigation }) => {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
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
        }
      }
    </ThemeContext.Consumer>
  );
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
});

export default ListCoursesItems;
