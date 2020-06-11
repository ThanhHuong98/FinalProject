import React, { } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { themes } from '../../Constant/Constant';
import Separator from '../common/Separator/separator-bottom';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../App';

const Setting = () => {
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
        ({ theme, setTheme }) => {
          console.log("Test Theme on Setting Screen: ", theme.background);
          return (
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
              <TouchableOpacity onPress={() => onLight(theme, setTheme)}>
                <Text style={{ ...styles.text, color: theme.textColor }}>Light</Text>
                <Separator />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDark(theme, setTheme)}>
                <Text style={{ ...styles.text, color: theme.textColor }}>Dark</Text>
                <Separator />
              </TouchableOpacity>
            </View>
          );
        }
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
    padding: 10,
  }

});

export default Setting;
