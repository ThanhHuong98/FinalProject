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

const SolidButton = ({ title, backgroundColor, onChooseOption }) => {
  return (
    <View style={{ ...styles.buttonContainer, backgroundColor }}>
      <TouchableOpacity
        onPress={onChooseOption}
      >
        <Text style={styles.textTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textTitle: {
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
SolidButton.propTypes = {
  title: propTypes.string,
  backgroundColor: propTypes.string,
  onChooseOption: propTypes.func
};
SolidButton.defaultProps = {
  title: '',
  backgroundColor: Colors.transparent,
  onChooseOption: (f) => f,
};

export default SolidButton;
