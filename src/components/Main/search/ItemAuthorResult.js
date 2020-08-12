/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Image, View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../../Constant/Constant';

const ItemAuthorResult = ({
  name, avatar, numOfCourses, textColor, onItemClick,
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onItemClick()}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.infoBlock}>
      <Text style={{ ...styles.name, color: textColor }}>{name}</Text>
      <Text style={styles.courses}>
        {numOfCourses}
        {' '}
        Courses
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  courses: {
    color: Colors.gray,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 3,
  },
  infoBlock: {
    marginLeft: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
});

ItemAuthorResult.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  numOfCourses: PropTypes.number,
  textColor: PropTypes.string,
  onItemClick: PropTypes.func,
};
export default ItemAuthorResult;
