import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const Icon = ( { icon, title, onChooseOption } ) => {
  return (
    <TouchableOpacity
      onPress={onChooseOption}
      style={styles.container}
    >
      <View style={styles.icon}>
        <Image
          source={require('../../../../assets/ic_bookmark.png')}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
  },
  icon: {
    backgroundColor: Colors.secondaryColor,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  imageCricle: {
    width: 16,
    height: 16,
  },
  title: {
    color: 'white',
    fontSize: FontSize.xsmall,
    marginTop: Dimension.marginSmall,
    textAlign: 'center',
    alignSelf: 'center'
  },
});
export default Icon;
