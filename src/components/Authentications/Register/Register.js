/* eslint-disable no-shadow */
/* eslint-disable no-sequences */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable global-require */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import SolidButton from '../../Common/SolidButton/solid-button';
import CustomInput from '../../Common/CustomInput/custom-input';
import {
  Colors, Dimension, FontSize, ScreenKey
} from '../../../Constant/Constant';
import { AuthenContext } from '../../providers/authen';
import { checkRegisterInfo } from '../../../core/services/checkAuthen';
import { LanguageContext } from '../../../../App';
import { lang } from 'moment';

const Register = ({ navigation }) => {
  const [msg, setMsg] = useState('');
  const authenContext = useContext(AuthenContext);

  const onBack = () => {
    navigation.navigate(ScreenKey.SplashScreen);
    authenContext.cancelRegister();
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
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const onCreateAccount = ( lang ) => {
    const msgCheckInfo = checkRegisterInfo(registerInfo.username, registerInfo.password, registerInfo.email, registerInfo.phone, lang);
    if (msgCheckInfo) {
      setMsg(msgCheckInfo);
    } else {
      authenContext.register(registerInfo);
    }
  };

  useEffect(() => {
    setMsg(authenContext.state.registerRespone.message);
    if (authenContext.state.registerRespone.message === 'OK') {
      navigation.navigate(ScreenKey.ActiveEmail, { intenType: 1 });
    }
  }, [authenContext.state.registerRespone.message]);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <View style={styles.container}>
            <View style={styles.displayCenter}>
              <Text style={styles.title}>{lang.MSignUp}</Text>
              <Text style={styles.instruction}>
                {lang.SignUpDesc}
              </Text>
            </View>
            {
        msg
          ? (
            msg === 'FAILED'
              ? (<Text style={styles.textEror}>{lang.SignUpFail}</Text>)
              : (msg === 'OK'
                ? (<Text style={styles.textSuccess}>{lang.SignUpSucess}</Text>)
                : <Text style={styles.textEror}>{msg}</Text>)
          )
          : null
      }
            <View style={styles.topDisplay}>
              <View style={styles.sideDisplay}>
                <CustomInput
                  label={lang.Name}
                  onChangeValue={(value) => setRegisterInfo({ ...registerInfo, username: value })}
                  value={registerInfo.username}
                />
              </View>
              <View style={styles.separator} />
              <View style={styles.sideDisplay}>
                <CustomInput
                  label={lang.Password}
                  onChangeValue={(value) => setRegisterInfo({ ...registerInfo, password: value })}
                  value={registerInfo.password}
                  isSecure
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <CustomInput
                label={lang.Email}
                onChangeValue={(value) => setRegisterInfo({ ...registerInfo, email: value })}
                value={registerInfo.email}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <CustomInput
                label={lang.Phone}
                onChangeValue={(value) => setRegisterInfo({ ...registerInfo, phone: value })}
                value={registerInfo.phone}
                keyboardType="numeric"
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <SolidButton
                title={lang.CreateAccount}
                backgroundColor={Colors.blue}
                onChooseOption={() => onCreateAccount(lang)}
              />
            </View>
            <View>
              <AnimatedLoader
                visible={authenContext.state.isLoading}
                overlayColor="rgba(0,0,0,0.65)"
                source={require('../../../../assets/common/loader.json')}
                animationStyle={styles.loading}
                speed={2}
              />
            </View>
          </View>

        )
      }
    </LanguageContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
    paddingBottom: Dimension.paddingMedium,
    paddingLeft: Dimension.paddingMedium,
    paddingRight: Dimension.paddingMedium,
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
  displayCenter: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: Dimension.marginMedium,
  },
  textSecondary: {
    color: Colors.white,
    fontSize: FontSize.xsmall,
    textAlign: 'left',
  },
  textEror: {
    color: 'red',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 30,
  },
  textSuccess: {
    color: 'green',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 30,
  },
  loading: {
    height: 100,
    width: 100,
  },
  iconHeader: {
    height: 30,
    width: 30,
    marginLeft: 10,
  }
});

export default Register;
