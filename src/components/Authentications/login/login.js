/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import CustomInput from '../../Common/CustomInput/custom-input';
import ButtonSolid from '../../Common/SolidButton/solid-button';
import { LanguageContext } from '../../../../App';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey
} from '../../../Constant/Constant';
import OutLineButton from '../../Common/OutLineButton/outLine-button';
import { AuthenContext } from '../../providers/authen';
import { checkLoginInfo } from '../../../core/services/checkAuthen';

const Login = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });
  const [msg, setMsg] = useState('');

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
    // navigation.navigate(ScreenKey.Register);
  };
  const onHelpMore = () => {
    navigation.navigate(ScreenKey.ForgotPassword);
  };

  const authenContext = useContext(AuthenContext);

  useEffect(() => {
    setMsg(authenContext.state.loginStatus);
    if (authenContext.state.loginStatus === 1) {
      navigation.replace(ScreenKey.Main);
    }
  }, [authenContext.state.loginStatus]);

  const onBack = () => {
    navigation.navigate(ScreenKey.SplashScreen);
    authenContext.cancelLogin();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => onBack()}>
          <Image
            style={styles.iconHeader}
            source={require('../../../../assets/authen/back.png')}
          />

        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const handleLogin = (lang) => {
    const msgCheckInfo = checkLoginInfo(loginInfo.email, loginInfo.password, lang);
    if (msgCheckInfo) {
      setMsg(msgCheckInfo);
    } else {
      authenContext.login(loginInfo.email, loginInfo.password);
    }
  };
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <View style={styles.container}>
            <View style={styles.displayCenter}>
              <Text style={styles.title}>{lang.SignIn}</Text>
              <Text style={styles.instruction}>
                {lang.SignInDesc}
              </Text>
            </View>
            {
        msg
          ? (
            msg === 2
              ? (
                <Text style={styles.textEror}>
                  {lang.SignInError}
                </Text>
              )
              : (
                <Text style={styles.textEror}>
                  {msg}
                </Text>
              )
          )
          : null
      }
            <CustomInput
              label="Email"
              onChangeValue={(email) => handleInputEmail(email)}
            />
            <View style={styles.separator} />
            <CustomInput
              label={lang.Password}
              onChangeValue={(password) => handleInputPassword(password)}
              isSecure
            />
            <View style={styles.solidBtn}>
              <ButtonSolid
                title={lang.SignIn}
                backgroundColor={Colors.blue}
                onChooseOption={() => handleLogin(lang)}
              />
            </View>
            <TouchableOpacity
              onPress={onHelpMore}
            >
              <Text style={styles.text}>{lang.ForgotPassAsk}</Text>
            </TouchableOpacity>
            <View style={styles.outlineBtn}>
              <OutLineButton
                title={lang.SignInGoogle}
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

        )
      }
    </LanguageContext.Consumer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    paddingBottom: Dimension.paddingMedium,
    paddingLeft: Dimension.paddingMedium,
    paddingRight: Dimension.paddingMedium,
  },
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
  primaryDisplay: {
  },
  displayCenter: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.dblue,
    fontSize: FontSize.xsmall,
    alignSelf: 'center',
    padding: 20,
  },
  textEror: {
    color: 'red',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 15,
  },
  textSuccess: {
    color: 'green',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 15,
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
  },
  separator: {
    height: 10,
  },
  iconHeader: {
    height: 30,
    width: 30,
    marginLeft: 10,
  }
});
export default Login;
