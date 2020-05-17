import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListCourseItems from './ListCoursesItem/list-courses-item';
import { courses } from '../../data/dataTest'

const ListCourses = () => {
    return (
        <ListCourseItems
            data={courses.data} 
        />
    );
};

const styles = StyleSheet.create({
    container: {

    },
});
export default ListCourses