/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import colorSource from '../../constants/color';

const ItemPath = ({
  id, name, numOfCourses, thumbnail, onChooseItem,
}) => (
    <TouchableOpacity style={styles.container} onPress={() => onChooseItem(id)}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnailContainer} resizeMode="contain"/>
        <View style={styles.infoContainer}>
            <Text numberOfLines={2} style={styles.courseName}>{name}</Text>
            <Text style={styles.textNumCourse}>{numOfCourses} courses</Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderColor: colorSource.borderColor,
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: 'column',
    height: 200,
    marginHorizontal: 10,
    width: 220,
  },
  courseName: {
    color: colorSource.black,
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: colorSource.courseBackground,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopColor: colorSource.borderColor,
    borderTopWidth: 1,
    height: '45%',
    padding: 8,
    width: '100%',
    zIndex: 9,
  },
  textNumCourse: {
    color: colorSource.gray,
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
  },
  thumbnailContainer: {
    backgroundColor: colorSource.darkGray,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: '55%',
    width: '100%',
  },
});

ItemPath.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  numOfCourses: PropTypes.number,
  thumbnail: PropTypes.string,
  onChooseItem: PropTypes.func,
};

ItemPath.defaultProps = {
  name: 'CCSP (Certified Cloud Security Professional)',
  numOfCourses: 9,
  thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
};

export default ItemPath;
