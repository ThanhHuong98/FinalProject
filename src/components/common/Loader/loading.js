import React from 'react';
import {
  ActivityIndicator, StyleSheet, View
} from 'react-native';
import { Colors } from '../../../Constant/Constant';

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" color={Colors.blue} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Loading;
