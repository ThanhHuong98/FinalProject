import React from 'react';
import {
  StyleSheet, ImageBackground, Text, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const ImageButton = ({
  title, width, url, onChooseOption
}) => (
  <ImageBackground
    style={{ ...styles.container, width }}
    source={{ uri: url }}
  >
    <TouchableOpacity
      style={styles.touch}
      onPress={onChooseOption}
    >
      <Text style={styles.title}>{title}</Text>
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
  url: PropTypes.string.isRequired,
  onChooseOption: PropTypes.func.isRequired,
};

ImageButton.defaultProps = {
  width: '100%',
};

export default ImageButton;
