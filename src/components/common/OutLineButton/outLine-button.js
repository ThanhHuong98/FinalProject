import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';
import { Colors, FontSize } from '../../../Constant/Constant';

const OutLineButton = ({ title, onChooseOption }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={onChooseOption}
    >
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Colors.transparent,
    borderColor: Colors.dblue,
    justifyContent: 'center',
  },
  textTitle: {
    color: Colors.blue,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
OutLineButton.propTypes = {
  title: propTypes.string.isRequired,
  onChooseOption: propTypes.func.isRequired
};
export default OutLineButton;
