import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Authentications/login/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a12',
  },
});
