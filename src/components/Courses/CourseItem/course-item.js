/* eslint-disable import/no-cycle */
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
import { Colors, FontSize } from '../../../Constant/Constant';
import PopupMenu from '../../Common/PopupMenu/popup-menu';
import { ThemeContext } from '../../../../App';
import { formatMonthYearType } from '../../../utils/DateTimeUtils';

const CourseItem = ({
  id,
  name,
  thumbnail,
  author,
  numOfVideos,
  date,
  duration,
  rating,
  price,
  onShowMenu,
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
              source={{ uri: thumbnail }}
            />
            <View style={styles.content}>
              <Text numberOfLines={2} style={{ ...styles.title, color: theme.textColor }}>{name}</Text>
              <Text style={{ ...styles.subtitile, marginTop: 3 }}>
                {
                author
                  ? `${author}`
                  : 'Không có thông tin giảng viên'
              }
              </Text>
              <Text style={{ ...styles.subtitile, marginTop: 3 }}>{ `${numOfVideos} (videos) . ${formatMonthYearType(date)} . ${duration}h`}</Text>
              <Star score={rating > 5 ? 5 : rating} style={styles.starStyle} />
              {
                price === 0
                  ? (<Text style={{ ...styles.subtitile, marginTop: 3 }}>Miễn phí</Text>)
                  : (
                    <Text style={{ ...styles.textPrice, marginTop: 3 }}>
                      {price}
                      {' '}
                      VNĐ
                    </Text>
                  )
              }
            </View>
            {/* <View style={styles.popupmenu}>
              <PopupMenu actions={['Edit', 'Remove']} onPress={() => onShowMenu()} />
            </View> */}
          </TouchableOpacity>
        )
      }
  </ThemeContext.Consumer>
);
CourseItem.propsType = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.number,
  author: PropTypes.string,
  date: PropTypes.number,
  numOfVideos: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number,
  onShowMenu: PropTypes.func,
  onItemClick: PropTypes.func,
};

CourseItem.defaultTypes = {
  name: 'Java Programming',
  thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
  author: 'Ben Piper',
  date: '2020-07-07T17:41:45.592Z',
  duration: 20,
  rating: 0,
  price: 0,
  numOfVideos: 10,
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
  popupmenu: {
    width: '10%'
  },
  starStyle: {
    width: 100,
    height: 20,
    marginTop: 3,
  },
  textPrice: {
    color: '#0084bc',
    fontSize: 11,
  },
});
CourseItem.defaultProps = {
  rating: 0,
};
export default CourseItem;
