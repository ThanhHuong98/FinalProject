import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Star from 'react-native-star-view';

const SectionCoursesItem = ({
  nameCourse,
  author,
  level,
  dateTime,
  interval,
  rating,
  srcImage,
  onChooseOption,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onChooseOption}
    >
      <Image
        style={styles.image}
        source={{ uri: srcImage }}
      />
      <View style={styles.content}>
        <Text style={{ ...styles.title, marginBottom: 6 }}>{nameCourse}</Text>
        <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{author}</Text>
        <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${level} . ${dateTime} . ${interval}h`}</Text>
        <Star score={rating} style={styles.starStyle} />
      </View>
    </TouchableOpacity>
  );
};

const primaryBackgroundColor = '#2c3038';
const textColorSubTitile = '#bdbdbd';

const styles = StyleSheet.create({
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
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
