import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView
  } from 'react-native';
import CoursesItem from '../CourseItem/course-item';

const ListCoursesItems = ({ data }) => {
    const separator = () => {
        return (
            <View
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
    };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

const primaryColorBackground = '#000a12';
const secondaryColor = '#2c3038';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColorBackground,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListCoursesItems;