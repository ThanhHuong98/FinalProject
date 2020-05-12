import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ForgotPassword = () => {
  const [email, setTextEmail] = useState('');
  const onSendMail = () => {
    console.log(email);
  };
  const onCancel = () => {
    setTextEmail('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.primaryDisplay}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.instruction}>
          Enter your email address and we will
          send you a link to reset password
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTextEmail(text)}
          defaultValue={email}
        />
        <View style={styles.buttonSolidBlue}>
          <TouchableOpacity
            onPress={onSendMail}
          >
            <Text style={styles.textPrimary}>Send email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSolidGrey}>
          <TouchableOpacity
            onPress={onCancel}
          >
            <Text style={styles.textPrimary}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#bdbdbd',
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 30,
  },
  instruction: {
    color: '#bdbdbd',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 30,
  },
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
    alignItems: 'center',
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
  buttonSolidGrey: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textPrimary: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForgotPassword;
