import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Star from 'react-native-star-view';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../App';
import { formatMonthYearType, formatHourType1 } from '../../../../temp/utils/DateTimeUtils';

// id: 1,
//       name: 'Java Programming - Build your first project',
//       thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
//       authors: [
//         'Ben Piper',
//         'Scott Allen',
//       ],
//       level: 'Beginner',
//       date: 1589250813000,
//       duration: 600,
//       rating: 4.5,
//       numOfJudgement: 326,
const SectionCoursesItem = ({
  name,
  authors,
  level,
  date,
  duration,
  rating,
  thumbnail,
  onChooseOption,
}) => {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <TouchableOpacity
              style={{ ...styles.itemContainer, backgroundColor: theme.itemColor }}
              onPress={onChooseOption}
            >
              <Image
                style={styles.image}
                source={{ uri: thumbnail }}
              />
              <View style={styles.content}>
                <Text style={{ ...styles.title, marginBottom: 6, color: theme.textColor }}>{name}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{authors[0]}{ authors.length > 1 ? `, +${authors.length - 1}` : ''}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4 }}>{ `${level} . ${formatMonthYearType(date)} . ${formatHourType1(duration)}`}</Text>
                <Star score={rating} style={styles.starStyle} />
              </View>
            </TouchableOpacity>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

const primaryBackgroundColor = '#2c3038';

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
    color: '#9e9e9e',
    fontSize: 11,
  },
  starRating: {
    alignSelf: 'flex-start',
  },
});
export default SectionCoursesItem;
