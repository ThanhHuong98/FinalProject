import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSize } from '../../../../../Constant/Constant';

const DetailPopularSkill = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
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

export default DetailPopularSkill;
