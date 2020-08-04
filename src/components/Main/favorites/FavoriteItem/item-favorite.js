/* eslint-disable import/no-cycle */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
// import Star from 'react-native-star-view';
import PropTypes from 'prop-types';
import { Colors, FontSize } from '../../../../Constant/Constant';
import { ThemeContext } from '../../../../../App';

const FavoriteItem = ({
  id,
  courseTitle,
  courseImage,
  instructorName,
  coursePrice,
  onClickItem,
}) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onClickItem(id)}
          >
            <Image
              style={styles.image}
              source={{ uri: courseImage }}
            />
            <View style={styles.content}>
              <Text numberOfLines={2} style={{ ...styles.title, color: theme.textColor }}>{courseTitle}</Text>
              <Text style={{ ...styles.subtitile, marginTop: 3 }}>
                {
                  instructorName
                    ? `${instructorName}`
                    : 'Không có thông tin giảng viên'
              }
              </Text>
              {/* <Text style={{ ...styles.subtitile, marginTop: 3 }}>{ `${numOfVideos} (videos) . ${formatMonthYearType(date)} . ${duration}h`}</Text> */}
              {/* <Star score={rating} style={styles.starStyle} /> */}
              <Text style={{ ...styles.subtitile, marginTop: 3 }}>
                {
                  coursePrice === 0
                    ? '(Miễn phí)'
                    : `(${coursePrice} VNĐ)`
                }
              </Text>
            </View>
            <View style={styles.favorite}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('../../../../../assets/favorite/heart.png')}/>
            </View>
          </TouchableOpacity>
        )
      }
  </ThemeContext.Consumer>
);
FavoriteItem.propsType = {
  id: PropTypes.string,
  courseTitle: PropTypes.string,
  courseImage: PropTypes.string,
  instructorName: PropTypes.string,
  coursePrice: PropTypes.number,
  onShowMenu: PropTypes.func,
  onItemClick: PropTypes.func,
};

FavoriteItem.defaultTypes = {
  courseTitle: 'Java Programming',
  courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
  instructorName: 'Ben Piper',
  coursePrice: 0,
  onShowMenu: (f) => f,
  onItemClick: (f) => f,
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
    color: '#9e9e9e',
    fontSize: FontSize.xsmall,
  },
  starRating: {
    alignSelf: 'flex-start',
  },
  favorite: {
    width: '10%',
    flexDirection: 'row',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginTop: 3,
  },
});
export default FavoriteItem;
