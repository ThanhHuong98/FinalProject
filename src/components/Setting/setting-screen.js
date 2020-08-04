/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Separator from '../Common/Separator/separator-bottom';
import { ThemeContext } from '../../../App';
import ArrowDark from '../../../assets/setting/next-dark.svg';
import ArrowLight from '../../../assets/setting/next-light.svg';

import SunLight from '../../../assets/setting/sun-light.svg';
import SunDark from '../../../assets/setting/sun-dark.svg';

import GlobalLight from '../../../assets/setting/global-light.svg';
import GlobalDark from '../../../assets/setting/global-dark.svg';

import { ScreenKey, themes } from '../../Constant/Constant';

const Setting = ({ navigation }) => {
  const settingThemes = () => {
    navigation.navigate(ScreenKey.SetTheme);
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <TouchableOpacity style={styles.itemOption} onPress={() => settingThemes()}>
              {
                theme === themes.light
                  ? (<SunDark width={15} height={18} />)
                  : (<SunLight width={15} height={18} />)
              }
              <Text style={{ ...styles.text, color: theme.textColor }}>Chế độ xem</Text>
              {
                  theme === themes.light
                    ? (<ArrowDark width={15} height={18} />)
                    : (<ArrowLight width={15} height={18} />)
                }
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={styles.itemOption}>
              {
                theme === themes.light
                  ? (<GlobalDark width={15} height={18} />)
                  : (<GlobalLight width={15} height={18} />)
              }
              <Text style={{ ...styles.text, color: theme.textColor }}>Ngôn ngữ</Text>
              {
                  theme === themes.light
                    ? (<ArrowDark width={15} height={18} />)
                    : (<ArrowLight width={15} height={18} />)
                }
            </TouchableOpacity>
            <Separator />
          </View>
        )
        }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 15,
    width: '90%',
    marginLeft: 7,
  },
  itemOption: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  }


});

export default Setting;
