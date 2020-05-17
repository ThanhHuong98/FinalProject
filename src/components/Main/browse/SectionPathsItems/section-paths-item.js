import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

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
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 200,
    height: 180,
    backgroundColor: Colors.secondaryColor,
  },
  image: {
    width: 200,
    height: 90,
    backgroundColor: Colors.white,
  },
  content: {
    padding: Dimension.paddingXMedium,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xxsmall,
  },
  subtitile: {
    color: Colors.greyWhite,
    fontSize: FontSize.small,
  },
});
export default SectionPathsItem;
