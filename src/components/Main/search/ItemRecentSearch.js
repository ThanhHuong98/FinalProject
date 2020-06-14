/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableWithoutFeedback, Image, StyleSheet, Text,
} from 'react-native';

const ItemRecentSearch = ({ searchKey, textColor }) => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <Image source={require('../../../temp/assets/search/recent-icon.png')} style={styles.icon}/>
      <Text styles={styles.text}>{searchKey}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  icon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
  text: {
    color: 'blue',
    fontSize: 14,
  },
});

ItemRecentSearch.propTypes = {
  searchKey: PropTypes.string,
};

export default ItemRecentSearch;
