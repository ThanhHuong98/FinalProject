import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

const ImageButton = ({ title, width, srcImage, onChooseOption }) => {
  return (
    <ImageBackground
      style={{ ...styles.container, width }}
      source={{ uri: srcImage }}
    >
      <TouchableOpacity
        style={styles.touch}
        onPress={onChooseOption}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
};


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

export default ImageButton;
