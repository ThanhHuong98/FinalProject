import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const IConButton = ({ icon, title, onChoose }) => {
  return (
    <TouchableOpacity
      style={styles.btnWrapper}
      onPress={onChoose}>
      <Image
        style={styles.icon}
        source={{}}
      />
      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryColor,
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 15,
    backgroundColor: 'red',
    marginRight: 10,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.medium,
  }
});
export default IConButton;
