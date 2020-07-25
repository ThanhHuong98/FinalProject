/* eslint-disable global-require */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, FontSize } from '../../../Constant/Constant';
import { ThemeContext } from '../../../../App';
import ListFavorites from './ListFavorite/list-favorite';
import { FavoritesContext } from '../../providers/favorites';
import NullImage from '../../../../assets/favorite/null.svg'

const Favorites = ({ navigation }) => {
  const favoritesContext = useContext(FavoritesContext);
  useEffect(() => {
    favoritesContext.requestFavorites();
  }, []);
  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
          {
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
          }
        </View>
      )
    }
    </ThemeContext.Consumer>

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
  }
});

export default Favorites;
