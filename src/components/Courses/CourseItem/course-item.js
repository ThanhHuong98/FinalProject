import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant'
import PopupMenu from '../../../components/common/PopupMenu/PopupMenu'

const CoursesItem = ({
  nameCourse,
  author,
  level,
  dateTime,
  interval,
  rating,
  srcImage,
}) => {
    const onPopupEvent = () => {
        //
    };
  return (
    <View style={styles.itemContainer}>
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
          rankingColor={Colors.yellow}
        />
      </View>
      <View style={styles.popupmenu}>
        <PopupMenu actions={['Edit', 'Remove']} onPress={onPopupEvent} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColor,
    padding: 15,
  },
  image: {
    height: '70%',
    width: '25%'
  },
  content: {
    marginLeft: 15,
    width: '65%'
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xxsmall,
  },
  subtitile: {
    color: Colors.greyWhite,
    fontSize: FontSize.xsmall,
  },
  starRating: {
    alignSelf: 'flex-start',
  },
  popupmenu:{
    width: '10%'
  }
});
export default CoursesItem;