import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SectionTitle = ({ title, onChooseOption }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={onChooseOption}
        style={styles.touch}
      >
        <Text style={styles.titleButton}>See all &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};
const secondaryColor = '#2c3038';

const styles = StyleSheet.create({
  display: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleButton: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    textAlign: 'center'
  },
  touch: {
    backgroundColor: secondaryColor,
    borderRadius: 25,
    width: '18%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default SectionTitle;
