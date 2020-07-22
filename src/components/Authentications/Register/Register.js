/* eslint-disable global-require */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import SolidButton from '../../Common/SolidButton/solid-button';
import CustomInput from '../../Common/CustomInput/custom-input';
import {
  Colors, Dimension, FontSize, ScreenKey
} from '../../../Constant/Constant';
import { AuthenContext } from '../../providers/authen';
import { checkRegisterInfo } from '../../../core/services/checkRegisterInfo';

const Register = ({ navigation }) => {
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const authenContext = useContext(AuthenContext);

  const onCreateAccount = () => {
    const info = registerInfo;
    const msgCheckInfo = checkRegisterInfo(info.username, info.password, info.email, info.phone);
    if (msgCheckInfo) {
      Alert.alert(
        'Thông báo',
        msgCheckInfo,
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
          }
        ],
        { cancelable: false }
      );
    } else {
      authenContext.register(info);
    }
  };

  useEffect(() => {
    if (authenContext.state.registerRespone.message === 'OK') {
      navigation.navigate(ScreenKey.Login);
    }
  }, [authenContext.state.registerRespone.message]);

  return (
    <View style={styles.container}>
      <View style={styles.topDisplay}>
        <View style={styles.sideDisplay}>
          <CustomInput
            label="Tên đăng nhập"
            onChangeValue={(value) => setRegisterInfo({ ...registerInfo, username: value })}
            value={registerInfo.username}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.sideDisplay}>
          <CustomInput
            label="Mật khẩu"
            onChangeValue={(value) => setRegisterInfo({ ...registerInfo, password: value })}
            value={registerInfo.password}
            isSecure
          />
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <CustomInput
          label="Email"
          onChangeValue={(value) => setRegisterInfo({ ...registerInfo, email: value })}
          value={registerInfo.email}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <CustomInput
          label="Số điện thoại"
          onChangeValue={(value) => setRegisterInfo({ ...registerInfo, phone: value })}
          value={registerInfo.phone}
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <SolidButton
          title="Tạo tài khoản"
          backgroundColor={Colors.blue}
          onChooseOption={() => onCreateAccount()}
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
        {/* {
          error
            ? (
              Alert.alert(
                'Create new account',
                error,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              )
            )
            : null
        } */}
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
  },
  buttonWrapper: {
    marginTop: Dimension.marginMedium,
  },
  textSecondary: {
    color: Colors.white,
    fontSize: FontSize.xsmall,
    textAlign: 'left',
  },
  loading: {
    height: 100,
    width: 100,
  },
});

export default Register;
