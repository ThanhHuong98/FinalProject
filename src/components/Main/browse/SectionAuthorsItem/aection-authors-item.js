import React, { } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
  },
  imageCricle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.xsmall,
    marginTop: Dimension.marginXSmall,
    textAlign: 'center',
  },
});
export default SectionAuthorsItem;
