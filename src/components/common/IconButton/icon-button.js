import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const IConButton = ({ iconName, title, onChoose }) => {
  return (
    <TouchableOpacity
      style={styles.btnWrapper}
      onPress={onChoose}
    >
      <Ionicons
        name={iconName}
        size={20}
        color={Colors.white}
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
  title: {
    color: Colors.white,
    fontSize: FontSize.medium,
    marginLeft: Dimension.marginSmall,
  }
});
export default IConButton;
