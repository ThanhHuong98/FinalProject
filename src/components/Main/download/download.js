/* eslint-disable global-require */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';
import { Colors, FontSize, themes } from '../../../Constant/Constant';
import { ThemeContext, LanguageContext } from '../../../../App';
// import ListFavorites from './ListFavorite/list-favorite';
import { FavoritesContext } from '../../providers/favorites';

const Download = ({ navigation }) => {
  // const favoritesContext = useContext(FavoritesContext);
  useEffect(() => {
    // favoritesContext.requestFavorites();
  }, []);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
          <ThemeContext.Consumer>
            {
      ({ theme }) => (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
          {/* {
            favoritesContext.state.allFavorites.length === 0
              ? (
                <View style={styles.center}>
                  <NullImage width={50} height={50} style={{ fill: '#bdbdbd' }} />
                  <Text style={styles.decription}>
                    Bạn chưa có khoá học yêu thích
                  </Text>
                </View>
              )
              : (
                <ListFavorites favorites={favoritesContext.state.allFavorites} />
              )
          } */}
          <View style={styles.center}>
            {
              theme === themes.dark
                ? (<Image source={require('../../../../assets/course-detail/download-icon.png')} style={styles.image} />)
                : (<Image source={require('../../../../assets/course-detail/download-icon-dark.png')} style={styles.image} />)
            }
            <Text style={styles.decription}>
              {lang.NoCourses}
            </Text>
          </View>
        </View>
      )
    }
          </ThemeContext.Consumer>

        )
      }
    </LanguageContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  }
});

export default Download;
