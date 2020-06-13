import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  StyleSheet,
  View,
  Text,
  CheckBox,
} from 'react-native';
import SolidButton from '../../common/SolidButton/solid-button';
import CustomInput from '../../common/CustomInput/custom-input';
import { Colors, Dimension, FontSize } from '../../../Constant/Constant';

const Register = () => {
  const [email, setTextEmail] = useState('');
  const [isSelected, setSelection] = useState(false);

  const onCreateAccount = () => {
    // console.log(email);
  };
  const onChangeText = (emailVal) => {
    setTextEmail(emailVal);
    // console.log(`EmailVal: ${emailVal}`);
    // console.log(`Emai: ${email}`);
  };

  return (

    <View style={styles.container}>
      <View style={styles.topDisplay}>
        <View style={styles.sideDisplay}>
          <CustomInput
            label="Username"
            onChangeValue={(text) => onChangeText(text)}
            value={email}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.sideDisplay}>
          <CustomInput
            label="Password"
            onChangeValue={(text) => onChangeText(text)}
            value={email}
          />
        </View>
      </View>
      <View style={styles.primaryDisplay}>
        <CustomInput
          label="Email"
          onChangeValue={(text) => onChangeText(text)}
          value={email}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={(value) => setSelection(value)}
            style={styles.checkbox}
          />
          <Text style={styles.textSecondary}>By checking here and continuing, you agree to the Term of Use and Privacy Polcy</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <SolidButton
            title="Create Account"
            backgroundColor={Colors.blue}
            onChooseOption={onCreateAccount}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
    padding: Dimension.paddingMedium,
  },
  topDisplay: {
    flexDirection: 'row',
  },
  sideDisplay: {
    flexDirection: 'column',
    width: '49%'
  },
  separator: {
    width: '2%'
  },
  primaryDisplay: {
    marginTop: Dimension.marginMedium,
  },
  buttonWrapper: {
    marginTop: Dimension.marginMedium,
  },
  textSecondary: {
    color: Colors.white,
    fontSize: FontSize.xsmall,
    textAlign: 'left',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: '95%',
    marginTop: Dimension.marginMedium,
  },
  checkbox: {
    width: '5%',
    height: 17,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 2,
    marginRight: 10,
  },
});

export default Register;
