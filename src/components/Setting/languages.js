/* eslint-disable import/no-cycle */
import React, {} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Separator from '../Common/Separator/separator-bottom';
import { ThemeContext, LanguageContext } from '../../../App';
import Tick from '../../../assets/setting/tick.svg';
import languages from '../../Constant/language';

const SetLanguage = () => {
  const setVi = (lang, setLang) => {
    if (lang === languages.eng) {
      setLang(languages.vi);
    }
  };

  const setEng = (lang, setLang) => {
    if (lang === languages.vi) {
      setLang(languages.eng);
    }
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <LanguageContext.Consumer>
            {
            ({ lang, setLang }) => (
              <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <TouchableOpacity style={styles.itemOption} onPress={() => setVi(lang, setLang)}>
                  <Text style={{ ...styles.text, color: theme.textColor }}>{lang.Vietnamese}</Text>
                  {
                  lang === languages.vi
                    ? (<Tick width={15} height={18} style={{ fill: '#0084bc' }} />)
                    : null
                }

                </TouchableOpacity>
                <Separator />
                <TouchableOpacity style={styles.itemOption} onPress={() => setEng(lang, setLang)}>
                  <Text style={{ ...styles.text, color: theme.textColor }}>{lang.English}</Text>
                  {
                  lang === languages.eng
                    ? (<Tick width={15} height={18} style={{ fill: '#0084bc' }} />)
                    : null
                }

                </TouchableOpacity>
                <Separator />
                <TouchableOpacity style={styles.itemOption} onPress={null}>
                  <Text style={{ ...styles.text, color: theme.textColor }}>{lang.System}</Text>
                </TouchableOpacity>
                <Separator />
              </View>

            )
              }
          </LanguageContext.Consumer>
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

export default SetLanguage;
