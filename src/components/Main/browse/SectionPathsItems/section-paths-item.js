import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const SectionPathsItem = ({ nameCourse, numberOfCourse, srcImage }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{ uri: srcImage }}
      />
      <View style={styles.content}>
        <Text style={{ ...styles.title, marginBottom: 6 }}>{nameCourse}</Text>
        <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${numberOfCourse} courses` }</Text>
      </View>
    </View>
  );
};
const primaryBackgroundColor = '#2c3038';
const textColorSubTitile = '#bdbdbd';
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 200,
    height: 180,
    backgroundColor: primaryBackgroundColor,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 90,
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
});
export default SectionPathsItem;
