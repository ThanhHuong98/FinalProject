import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [username, setTextUsename] = useState('');
  const [password, setTextPassword] = useState('');
  const onLogin = () => {
    console.log(username);
    console.log(password);
  };
  const onSubscribe = () => {
    //
  };
  const onHelpMore = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.primaryDisplay}>
        <Text style={styles.label}>
          Email or username
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          onChangeText={(text) => setTextUsename(text)}
          defaultValue={username}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
          placeholder=""
          onChangeText={(text) => setTextPassword(text)}
          defaultValue={password}
        />
        <View style={styles.buttonSolid}>
          <TouchableOpacity
            onPress={onLogin}
          >
            <Text style={styles.textPrimary}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onHelpMore}
        >
          <Text style={styles.textSecondaryBlue}>Need help?</Text>
        </TouchableOpacity>
        <View style={styles.buttonAround}>
          <TouchableOpacity
            onPress={onSubscribe}
          >
            <Text style={styles.textColorBlue}>Subscribe to MyApp</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    backgroundColor: '#000a12',
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
  buttonSolid: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#0084bc',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonAround: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#58b3ef',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  textPrimary: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textColorBlue: {
    color: '#58b3ef',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSecondaryBlue: {
    color: '#58b3ef',
    fontSize: 13,
  },

});
export default Login;
