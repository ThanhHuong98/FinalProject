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
import CoursesItem from '../CourseItem/course-item';
import separator from '../../Common/Separator/separator-bottom';
import { ThemeContext } from '../../../../App';

const ListCourses = ({ title, courses, onItemClick }) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <CoursesItem
                  name={item.title}
                  thumbnail={item.imageUrl}
                  author={item['instructor.user.name']}
                  numOfVideos={item.videoNumber}
                  date={item.date}
                  duration={item.totalHours}
                  rating={item.contentPoint}
                  price={item.price}
                  onClickItem={() => onItemClick(item)}
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
ListCourses.propTypes = {
  title: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
};

ListCourses.dedefaultProps = {
  title: 'Software Development',
  courses: [
    {
      id: 1,
      name: 'Java Programming - Build your first project',
      thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 326,
    },
    {
      id: 2,
      name: 'Agular Fundamentals',
      thumbnail: 'https://pluralsight.imgix.net/course-images/angular-fundamentals-v1.jpg',
      authors: [
        'Joe Eames',
      ],
      level: 'Intermediate',
      date: 1589250913000,
      duration: 800,
      rating: 4,
      numOfJudgement: 819,
    },
    {
      id: 3,
      name: 'Managing AWS Operations',
      thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
      authors: [
        'Andru Estes',
      ],
      level: 'Intermediate',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 13,
    },
    {
      id: 4,
      name: 'C# Fundamentals',
      thumbnail: 'https://pluralsight.imgix.net/course-images/csharp-fundamentals-dev-v1.png',
      authors: [
        'Scott Allen',
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 3.5,
      numOfJudgement: 445,
    },
    {
      id: 5,
      name: 'How Git Works',
      thumbnail: 'https://pluralsight.imgix.net/course-images/how-git-works-v1.jpg',
      authors: [
        'Paolo Perrotta',
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 5,
      numOfJudgement: 6988,
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


export default ListCourses;
