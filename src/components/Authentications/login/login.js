/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import CustomInput from '../../Common/CustomInput/custom-input';
import ButtonSolid from '../../Common/SolidButton/solid-button';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey
} from '../../../Constant/Constant';
import OutLineButton from '../../Common/OutLineButton/outLine-button';
import { AuthenContext } from '../../../providers/authen';
import { reduce } from 'lodash';

const Login = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });
  const handleInputEmail = (email) => {
    setLoginInfo({
      ...loginInfo,
      email,
    });
  };
  const handleInputPassword = (password) => {
    setLoginInfo({
      ...loginInfo,
      password,
    });
  };

  const onSubscribe = () => {
    navigation.navigate(ScreenKey.Register);
  };
  const onHelpMore = () => {

  };
  const authenContext = useContext(AuthenContext);
  useEffect(() => {
    if (authenContext.state.loginStatus === 1) {
      navigation.replace(ScreenKey.Main);
    }
  }, [authenContext.state.loginStatus]);

  const handleLogin = () => {
    authenContext.login(loginInfo.email, loginInfo.password);
  };
  return (
    <View style={styles.container}>
      <CustomInput
        label="Email or username"
        onChangeValue={(email) => handleInputEmail(email)}
      />
      <CustomInput
        label="Password"
        onChangeValue={(password) => handleInputPassword(password)}
        isSecure
      />
      <View style={styles.solidBtn}>
        <ButtonSolid
          title="Sign in"
          backgroundColor={Colors.blue}
          onChooseOption={() => handleLogin()}
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
      <AnimatedLoader
        visible={authenContext.state.isLoading}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('../../../../assets/common/loader.json')}
        animationStyle={styles.lottie}
        speed={2}
      />
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
  },
  lottie: {
    width: 100,
    height: 100,
  }

});
export default Login;
