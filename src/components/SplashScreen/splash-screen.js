/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import ButtonSolid from '../Common/SolidButton/solid-button';
import {
  Colors,
  Dimension,
  ScreenKey
} from '../../Constant/Constant';
import OutLineButton from '../Common/OutLineButton/outLine-button';

const SplashScreen = ({ navigation }) => {
  const onLogin = () => {
    navigation.navigate(ScreenKey.Login);
  };
  const onSubscribe = () => {
    navigation.navigate(ScreenKey.Register);
  };
  const onActive = () => {
    navigation.navigate(ScreenKey.ActiveEmail);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgSplash}
        source={require('../../../assets/bg-splash.png')}
      />
      <View style={{ paddingTop: 10 }}>
        <ButtonSolid
          title="Đăng nhập"
          backgroundColor={Colors.blue}
          onChooseOption={onLogin}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <OutLineButton
          title="Đăng ký hệ thống"
          onChooseOption={onSubscribe}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <OutLineButton
          title="Kích hoạt tài khoản"
          onChooseOption={onActive}
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
    paddingBottom: Dimension.paddingMedium,
    paddingLeft: Dimension.paddingMedium,
    paddingRight: Dimension.paddingMedium,
  },
  bgSplash: {
    width: '100%',
    height: 200,
  },
});
export default SplashScreen;
