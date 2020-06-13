import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import colorSource from '../../temp/color';

const AuthorItem = ({
  id, name, avatar, onItemClick,
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onItemClick(id)}>
    <Image source={{ uri: avatar }} resizeMode='cover' style={styles.avatar}/>
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 25,
    width: 25,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 20,
    flexDirection: 'row',
    height: 30,
    padding: 3,
  },
  name: {
    color: colorSource.white,
    fontSize: 14,
    marginHorizontal: 5,
  },
});
AuthorItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default AuthorItem;
