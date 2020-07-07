import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const Icon = ({ title, iconName, onChooseOption }) => {
  const SIZE_ICON = 20;
  return (
    <TouchableOpacity
      onPress={onChooseOption}
      style={styles.container}
    >
      <View style={styles.icon}>
        <Ionicons
          name={iconName}
          size={SIZE_ICON}
          color={Colors.white}
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
Icon.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onChooseOption: PropTypes.func.isRequired
};
export default Icon;
