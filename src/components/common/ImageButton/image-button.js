import React from 'react';
import {
  StyleSheet, ImageBackground, Text, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../../Constant/Constant';

const ImageButton = ({
  title, width, thumbnail, onClickItem, bgColor, fontSize, borderRadius
}) => (
  <ImageBackground
    style={{
      ...styles.container, width, backgroundColor: bgColor, borderRadius
    }}
    source={{ uri: thumbnail }}
  >
    <TouchableOpacity
      style={styles.touch}
      onPress={() => onClickItem()}
    >
      <Text style={{...styles.title, fontSize }}>{title}</Text>
    </TouchableOpacity>
  </ImageBackground>
);


const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

ImageButton.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  thumbnail: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
};

ImageButton.defaultProps = {
  width: '100%',
  bgColor: Colors.transparent,
};

export default ImageButton;
