import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';
import { ScreenKey } from '../../../../Constant/Constant';

const SectionCourses = ({ title, data, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayTop}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.buttonMore}
          onPress={() => navigation.navigate(ScreenKey.ListCourse)}>
          <Text style={styles.titileButton}>See all &gt;</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SectionCoursesItem
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
  displayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titileButton: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    textAlign: 'center'
  },
  buttonMore: {
    backgroundColor: secondaryColor,
    borderRadius: 25,
    width: '18%',
    alignSelf: 'flex-end'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SectionCourses;
