import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Star from 'react-native-star-view';
import PropTypes from 'prop-types';
import { Colors, FontSize, ScreenKey } from '../../../Constant/Constant';
import PopupMenu from '../../Common/PopupMenu/popup-menu';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const CourseItem = ({
  id,
  name,
  thumbnail,
  authors,
  level,
  date,
  duration,
  rating,
  numOfJudgement,
  navigation,
}) => {
  const onPopupEvent = () => {
    //
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          console.log("Test Item Course: ", name);
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate(ScreenKey.DetailCourse)}
            >
              <Image
                style={styles.image}
                source={{ uri: thumbnail }}
              />
              <View style={styles.content}>
                <Text style={{ ...styles.title, marginBottom: 6, color: theme.textColor }}>{name}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{authors[0]}{ authors.length > 1 ? `, +${authors.length - 1}` : ''}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${level} . ${date} . ${duration}h`}</Text>
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
CourseItem.propsType = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.number,
  authors: PropTypes.arrayOf(PropTypes.string),
  level: PropTypes.string,
  date: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  numOfJudgement: PropTypes.number,
};

CourseItem.defaultTypes = {
  name: 'Java Programming',
  thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
  authors: [
    'Ben Piper',
    'Scott Allen',
  ],
  level: 'Beginner',
  date: 1589250813000,
  duration: 600000,
  rating: 4.5,
  numOfJudgement: 326,
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
