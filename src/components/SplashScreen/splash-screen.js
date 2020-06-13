import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import ButtonSolid from '../common/SolidButton/solid-button';
import {
  Colors,
  Dimension,
  ScreenKey
} from '../../Constant/Constant';
import OutLineButton from '../common/OutLineButton/outLine-button';

const SplashScreen = ({ navigation }) => {
  const onLogin = () => {
    navigation.navigate(ScreenKey.Login);
  };
  const onSubscribe = () => {
    navigation.navigate(ScreenKey.Register);
  };
  const onExplore = () => {
    navigation.navigate(ScreenKey.Main);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgSplash}
        // eslint-disable-next-line global-require
        source={require('../../../assets/bg-splash.png')}
      />
      <View style={{ paddingTop: 10 }}>
        <ButtonSolid
          title="Sign in"
          backgroundColor={Colors.blue}
          onChooseOption={onLogin}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <OutLineButton
          title="Subscribe to MyApp"
          onChooseOption={onSubscribe}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <OutLineButton
          title="Explore without a Subscribe"
          onChooseOption={onExplore}
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
  bgSplash: {
    width: '100%',
    height: 200,
  }

});
export default SplashScreen;
