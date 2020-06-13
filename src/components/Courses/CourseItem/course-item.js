import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Star from 'react-native-star-view';
import { Colors, FontSize, ScreenKey } from '../../../Constant/Constant';
import PopupMenu from '../../common/PopupMenu/PopupMenu';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const CourseItem = ({
  nameCourse,
  author,
  level,
  dateTime,
  interval,
  rating,
  srcImage,
  navigation,
}) => {
  const onPopupEvent = () => {
    //
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
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
                <Text style={{ ...styles.title, marginBottom: 6, color: theme.textColor }}>{nameCourse}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{author}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${level} . ${dateTime} . ${interval}h`}</Text>
                <Star score={rating} style={styles.starStyle} />
              </View>
              <View style={styles.popupmenu}>
                <PopupMenu actions={['Edit', 'Remove']} onPress={onPopupEvent} />
              </View>
            </TouchableOpacity>
          );
        }
      }

    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
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
  popupmenu: {
    width: '10%'
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
});
export default CourseItem;
