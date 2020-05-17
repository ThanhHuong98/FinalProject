import React, { } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';


const SectionPopularSkillsItem = ({ title }) => {
  return (
    <View style={styles.themeItem}>
      <Text style={styles.title}>{title}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  themeItem: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 25,
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.small,
    padding: 5,
    textAlign: 'center'
  },
});

export default SectionPopularSkillsItem;
