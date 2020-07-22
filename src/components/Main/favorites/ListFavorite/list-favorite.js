/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import FavoriteItem from '../FavoriteItem/item-favorite';
import separator from '../../../Common/Separator/separator-bottom';
import { ThemeContext } from '../../../../../App';

const ListFavorites = ({ title, favorites, onItemClick }) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
            <FlatList
              data={favorites}
              renderItem={({ item }) => (
                <FavoriteItem
                  courseTitle={item.courseTitle}
                  courseImage={item.courseImage}
                  instructorName={item.instructorName}
                  coursePrice={item.coursePrice}
                  onItemClick={() => onItemClick(item)}
                />
              )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={separator}
            />
          </SafeAreaView>
        )
      }
  </ThemeContext.Consumer>
);
ListFavorites.propTypes = {
  title: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
};

ListFavorites.defaultProps = {
  title: 'Danh sách khóa học bạn yêu thích',
  favorites: [
    {
      id: 1,
      courseTitle: 'Java Programming',
      courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      instructorName: 'Ben Piper',
      coursePrice: 0,
    },
    {
      id: 2,
      courseTitle: 'Java Programming',
      courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      instructorName: 'Ben Piper',
      coursePrice: 0,
    },
    {
      id: 3,
      courseTitle: 'Java Programming',
      courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      instructorName: 'Ben Piper',
      coursePrice: 0,
    },
    {
      id: 4,
      courseTitle: 'Java Programming',
      courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      instructorName: 'Ben Piper',
      coursePrice: 0,
    },
    {
      id: 5,
      courseTitle: 'Java Programming',
      courseImage: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      instructorName: 'Ben Piper',
      coursePrice: 0,
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
});


export default ListFavorites;
