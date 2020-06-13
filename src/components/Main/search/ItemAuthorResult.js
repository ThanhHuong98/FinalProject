import React from 'react';
import {
  Image, View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';

const ItemAuthorResult = ({
  id, name, avatar, numOfCourses, onItemClick,
}) => (
    <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.avatar}/>
        <View style={styles.infoBlock}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.courses}>{numOfCourses} Courses</Text>
        </View>
    </View>
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
    color: colorSource.gray,
    fontSize: 12,
  },
  infoBlock: {
    marginLeft: 15,
  },
  name: {
    color: colorSource.black,
    fontSize: 14,
  },
});

ItemAuthorResult.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  numOfCourses: PropTypes.number,
  onItemClick: PropTypes.func,
};
export default ItemAuthorResult;
