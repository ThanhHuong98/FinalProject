import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';
import { Dimension } from '../../../Constant/Constant';

const CustomInput = ({
  label,
  value,
  onChangeValue,
  isSecure,
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        // onChangeText={(text) => setValue(text)}
        onChangeText={onChangeValue}
        defaultValue={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};
const textPrimaryColor = '#bdbdbd';
const primaryBackgroundColor = '#2c3038';
const borderColor = '#37474f';

const styles = StyleSheet.create({
  textInputContainer: {
    // flexDirection: 'column',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor,
    backgroundColor: primaryBackgroundColor,
    color: textPrimaryColor,
    textAlign: 'left',
    padding: 5,
  },
  label: {
    color: textPrimaryColor,
    alignSelf: 'flex-start',
    fontSize: 18,
    marginBottom: Dimension.marginSmall,
  },
});

CustomInput.propTypes = {
  label: propTypes.string,
  value: propTypes.string,
  isSecure: propTypes.bool,
  onChangeValue: propTypes.func,
};
CustomInput.defaultProps = {
  label: '',
  value: '',
  isSecure: false,
  onChangeValue: (f) => f,
};

export default CustomInput;
