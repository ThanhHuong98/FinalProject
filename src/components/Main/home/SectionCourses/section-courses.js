import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import SectionCoursesItem from '../../../../components/Main/home/SectionCoursesItem/section-courses-item';
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
      {/* <View style={styles.displayTop}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.buttonMore}
          onPress={onSeeMore}>
          <Text style={styles.titileButton}>See all &gt;</Text>
        </TouchableOpacity>
      </View> */}
      <SectionTitle
        title={title}
        onChooseOption={onSeeMore}
      />
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
