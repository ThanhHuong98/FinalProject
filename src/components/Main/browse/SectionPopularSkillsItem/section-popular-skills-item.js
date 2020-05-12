import React, { } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const SectionPopularSkillsItem = ({ title }) => {
  return (
    <View style={styles.themeItem}>
      <Text style={styles.title}>{title}</Text>
    </View>

  );
};

const secondaryColor = '#2c3038';

const styles = StyleSheet.create({
  themeItem: {
    backgroundColor: secondaryColor,
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginLeft: 15,
    paddingRight: 3,
    paddingLeft: 3,
  },
  title: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    textAlign: 'center'
  },
});

export default SectionPopularSkillsItem;
