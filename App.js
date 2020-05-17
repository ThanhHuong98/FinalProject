import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyleSheet, View } from 'react-native';
// import Login from './src/components/Authentications/Login/login';
// import ForgotPassword from './src/components/Authentications/ForgotPassword/forgot-password';
// import Register from './src/components/Authentications/Register/register';
import Browse from './src/components/Main/browse/browse';
import Home from './src/components/Main/home/home';
import ListCourses from './src/components/Courses/list-courses'
import CourseItem from './src/components/Courses/CourseItem/course-item'
import Search from './src/components/Main/search/Search';
import Downloads from './src/components/Main/downloads/downloads';
import Register from './src/components/Authentications/Register/Register';


export default function App() {
  return (
    <View style={styles.container}>
      <Register />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a12',
  },
});
