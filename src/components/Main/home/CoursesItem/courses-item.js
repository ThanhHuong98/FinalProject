/* eslint-disable react/require-default-props */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Star from 'react-native-star-view';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../App';
import { formatMonthYearType, formatHourType1 } from '../../../../utils/DateTimeUtils';
import { Colors } from '../../../../Constant/Constant';

const SectionCoursesItem = ({
  id,
  name,
  thumbnail,
  author,
  numOfVideos,
  date,
  duration,
  rating,
  price,
  onClickItem,
}) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <TouchableOpacity
            style={{ ...styles.itemContainer, backgroundColor: theme.itemColor }}
            onPress={() => onClickItem(id)}
          >
            <Image
              style={styles.image}
              source={{ uri: thumbnail }}
            />
            <View style={styles.content}>
              <Text numberOfLines={2} style={{ ...styles.title, marginBottom: 0, color: theme.textColor }}>{name}</Text>
              <Text style={{ ...styles.subtitile, marginTop: 2 }}>
                {
                author
                  ? `${author}`
                  : 'Không có thông tin giảng viên'
              }
              </Text>
              <Text style={{ ...styles.subtitile, marginTop: 2 }}>{ `${numOfVideos} . ${formatMonthYearType(date)} . ${formatHourType1(duration)}`}</Text>
              <Star score={rating} style={styles.starStyle} />
              <Text style={{ ...styles.subtitile, marginTop: 2 }}>
                {
                  price === 0
                    ? '(Miễn phí)'
                    : `(${price} VNĐ)`
                }
              </Text>
            </View>
          </TouchableOpacity>
        )
      }
  </ThemeContext.Consumer>
);
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 200,
    height: 220,
    backgroundColor: Colors.secondaryColor,
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
    color: '#9e9e9e',
    fontSize: 11,
  },
  starRating: {
    alignSelf: 'flex-start',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 0,
  },
});

SectionCoursesItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.number,
  author: PropTypes.string,
  numOfVideos: PropTypes.number,
  date: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number,
  onClickItem: PropTypes.func,
};
export default SectionCoursesItem;
