import React, { } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const SectionAuthorsItem = ({ title, source }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageCricle}
        source={{ uri: source }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const primaryColorBackground = 'transparent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColorBackground,
    flexDirection: 'column',
    paddingTop: 15,
    paddingLeft: 15,
  },
  imageCricle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  title: {
    color: 'white',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  },
});
export default SectionAuthorsItem;
