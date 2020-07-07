import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../Common/CustomInput/custom-input';
import ButtonSolid from '../../Common/SolidButton/solid-button';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey
} from '../../../Constant/Constant';
import OutLineButton from '../../Common/OutLineButton/outLine-button';

const Login = ({ navigation }) => {
  const [username, setTextUsename] = useState('');
  const [password, setTextPassword] = useState('');
  const onLogin = () => {
    navigation.navigate(ScreenKey.Main);
  };
  const onSubscribe = () => {
    navigation.navigate(ScreenKey.Register);
  };
  const onHelpMore = () => {

  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Email or username"
        onChangeValue={(text) => setTextUsename(text)}
        value={username}
      />
      <CustomInput
        label="Password"
        onChangeValue={(text) => setTextPassword(text)}
        value={password}
        isSecure
      />
      <View style={styles.solidBtn}>
        <ButtonSolid
          title="Sign in"
          backgroundColor={Colors.blue}
          onChooseOption={onLogin}
        />
      </View>
      <TouchableOpacity
        onPress={onHelpMore}
      >
        <Text style={styles.text}>Need help?</Text>
      </TouchableOpacity>
      <View style={styles.outlineBtn}>
        <OutLineButton
          title="Subscribe to MyApp"
          onChooseOption={onSubscribe}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    padding: Dimension.paddingMedium,
  },
  primaryDisplay: {
  },
  text: {
    color: Colors.dblue,
    fontSize: FontSize.xsmall,
    alignSelf: 'center',
    padding: Dimension.paddingXMedium,
  },
  solidBtn: {
    marginTop: Dimension.marginMedium,
  },
  outlinebtn: {
    marginTop: Dimension.marginSmall,
  }

});
export default Login;
