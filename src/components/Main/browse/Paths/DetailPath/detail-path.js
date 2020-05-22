import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSize } from '../../../../../Constant/Constant';

const DetailPath = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Path Detail page
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.large,
    color: Colors.white,
  }
});

export default DetailPath;
