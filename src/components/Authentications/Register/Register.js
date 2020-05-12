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

const Register = () => {
  const [email, setTextEmail] = useState('');
  const [isSelected, setSelection] = useState(false);

  const onCreateAccount = () => {
    console.log(email);
  };
  const onChangeText = (emailVal) => {
    setTextEmail(emailVal);
    console.log(`EmailVal: ${emailVal}`);
    console.log(`Emai: ${email}`);
  };

  return (

    <View style={styles.container}>
      <View style={styles.primaryDisplay}>
        <CustomInput
          label="Email"
          width="100%"
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
        <SolidButton
          title="Create Account"
          backgroundColor="#0084bc"
          onChooseOption={onCreateAccount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000a12',
  },
  primaryDisplay: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#37474f',
    backgroundColor: '#2c3038',
    color: '#bdbdbd',
    textAlign: 'left',
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    color: '#bdbdbd',
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  buttonSolidBlue: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#0084bc',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textPrimary: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSecondary: {
    color: 'white',
    fontSize: 13,
    textAlign: 'left',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 2,
    marginRight: 10,
  },
  topDisplay: {
    flexDirection: 'row',
  },
  sideDisplay: {
    flexDirection: 'column',
  }
});

export default Register;
