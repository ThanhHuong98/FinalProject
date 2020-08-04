/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { themes } from '../../Constant/Constant';
import Separator from '../Common/Separator/separator-bottom';
import { ThemeContext } from '../../../App';
import Tick from '../../../assets/setting/tick.svg';

const SetTheme = () => {
  const onLight = (theme, setTheme) => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    }
  };

  const onDark = (theme, setTheme) => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    }
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme, setTheme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <TouchableOpacity style={styles.itemOption} onPress={() => onDark(theme, setTheme)}>
              <Text style={{ ...styles.text, color: theme.textColor }}>Tối</Text>
              {
                  theme === themes.dark
                    ? (<Tick width={15} height={18} style={{ fill: '#0084bc' }} />)
                    : null
                }

            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={styles.itemOption} onPress={() => onLight(theme, setTheme)}>
              <Text style={{ ...styles.text, color: theme.textColor }}>Sáng</Text>
              {
                  theme === themes.light
                    ? (<Tick width={15} height={18} style={{ fill: '#0084bc' }} />)
                    : null
                }

            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={styles.itemOption} onPress={null}>
              <Text style={{ ...styles.text, color: theme.textColor }}>Hệ thống</Text>
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

export default SetTheme;
