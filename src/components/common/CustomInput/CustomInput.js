import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const CustomInput = ({
  label,
  value,
  onChangeValue,
  width
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{ ...styles.textInput, width }}
        // onChangeText={(text) => setValue(text)}
        onChangeText={onChangeValue}
        defaultValue={value}
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
  },
});

CustomInput.propTypes = {
  label: propTypes.string,
  width: propTypes.string,
  value: propTypes.string,
  onChangeValue: propTypes.func,
};
CustomInput.defaultProps = {
  label: '',
  width: '100%',
  value: '',
  onChangeValue: (f) => f,
};

export default CustomInput;
