/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ScreenKey,
  FontSize
} from '../../../Constant/Constant';
import { AuthenContext } from '../../providers/authen';
import { isCheckAvailableEmail } from '../../../core/services/checkAuthen';

const ActiveEmail = ({ route, navigation }) => {
  const intentType = route.params.intenType;

  const [msg, setMsg] = useState('');
  const authenContext = useContext(AuthenContext);

  const onBack = () => {
    if (intentType === 1) {
      navigation.navigate(ScreenKey.Register);
      authenContext.cancelActive();
    } else {
      navigation.navigate(ScreenKey.SplashScreen);
      authenContext.cancelActive();
    }
  };
  const onLogin = () => {
    navigation.navigate(ScreenKey.Login);
    authenContext.cancelActive();
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
  const [email, setTextEmail] = useState('');
  const onSendMail = () => {
    if (email === '') {
      setMsg('Email không được để trống.');
    } else if (!isCheckAvailableEmail(email)) {
      setMsg('Email không đúng hợp lệ, vui lòng nhập lại!');
    } else {
      authenContext.activeAccount(email);
    }
  };
  useEffect(() => {
    setMsg(authenContext.state.activeStatus);
    if (authenContext.state.activeStatus === 1) {
      // navigation.navigate(ScreenKey.Login);
    }
  }, [authenContext.state.activeStatus]);

  console.log('Message Forgot: ', msg);
  return (
    <View style={styles.container}>
      <View style={styles.primaryDisplay}>
        <Text style={styles.title}>Kích Hoạt Tài Khoản</Text>
        <Text style={styles.instruction}>
          Nhập Email đăng ký của bạn, chúng ta sẽ kích hoạt tài khoản cho bạn.
        </Text>
        {
        msg
          ? (
            msg === 2
              ? (<Text style={styles.textEror}>Tài khoản của bạn đã được kích hoạt hoặc tài khoản không tồn tại.</Text>)
              : (msg === 1
                ? (<Text style={styles.textSuccess}>Gửi email kích hoạt tài khoản thành công. Vui lòng kiểm tra hộp thoại email để xác nhận kích hoạt tài khoản.</Text>)
                : <Text style={styles.textEror}>{msg}</Text>)
          )
          : null
      }
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTextEmail(text)}
          defaultValue={email}
        />
        <View style={styles.buttonSolidBlue}>
          <TouchableOpacity
            onPress={() => onSendMail()}
          >
            <Text style={styles.textPrimary}>Kích Hoạt</Text>
          </TouchableOpacity>
        </View>
        {
          msg === 1
            ? (
              <View style={styles.buttonSolidGrey}>
                <TouchableOpacity
                  onPress={() => onLogin()}
                >
                  <Text style={styles.textPrimary}>Quay lại màn hình Đăng nhập</Text>
                </TouchableOpacity>
              </View>
            )
            : (
              <View style={styles.buttonSolidGrey}>
                <TouchableOpacity
                  onPress={() => onBack()}
                >
                  <Text style={styles.textPrimary}>Huỷ Kích Hoạt</Text>
                </TouchableOpacity>
              </View>
            )
        }
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
  iconHeader: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  textEror: {
    color: 'red',
    fontSize: FontSize.xsmall,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textSuccess: {
    color: 'green',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 30,
  },
});

export default ActiveEmail;
