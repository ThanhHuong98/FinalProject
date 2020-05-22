import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { ScreenKey } from '../../../../Constant/Constant';

const SectionCoursesItem = ({
  nameCourse,
  author,
  level,
  dateTime,
  interval,
  rating,
  srcImage,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate(ScreenKey.DetailCourse)}
    >
      <Image
        style={styles.image}
        source={{ uri: srcImage }}
      />
      <View style={styles.content}>
        <Text style={{ ...styles.title, marginBottom: 6 }}>{nameCourse}</Text>
        <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{author}</Text>
        <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${level} . ${dateTime} . ${interval}h`}</Text>
        <Rating
          style={styles.starRating}
          type="custom"
          ratingCount={5}
          startingValue={rating}
          imageSize={15}
          showRating={false}
          readonly
          rankingColor="yellow"
        />
      </View>
    </TouchableOpacity>
  );
};

const primaryBackgroundColor = '#2c3038';
const textColorSubTitile = '#bdbdbd';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 200,
    height: 210,
    backgroundColor: primaryBackgroundColor,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 100,
    backgroundColor: 'white'
  },
  content: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
  },
  subtitile: {
    color: textColorSubTitile,
    fontSize: 11,
  },
  starRating: {
    alignSelf: 'flex-start',
  },
});
export default SectionCoursesItem;
