import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Authentications/login/Login';
import ForgotPassword from './src/components/Authentications/ForgotPassword/ForgotPassword';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgotPassword />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a12',
  },
});
