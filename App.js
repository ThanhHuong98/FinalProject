import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Authentications/Login/login';
import ForgotPassword from './src/components/Authentications/ForgotPassword/forgot-password';
import Register from './src/components/Authentications/Register/register';
import Home from './src/components/Main/home/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a12',
  },
});
