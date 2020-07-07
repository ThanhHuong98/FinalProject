/* eslint-disable import/no-cycle */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes, { object } from 'prop-types';
import Module from './ItemContent';
import { Colors } from '../../Constant/Constant';

const ItemSeperator = () => (
  <View
    style={styles.separator}
  />
);

const Content = ({ modules }) => (
  <FlatList
    data={modules}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={ItemSeperator}
    renderItem={({ item, index }) => (
      <Module
        moduleName={item.name}
        index={index + 1}
        duration={item.duration}
        progress={item.progress}
        content={item.content}
      />
    )}
  />
);

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.darkGray,
    height: 1,
    width: '100%',
  },
});

Content.propTypes = {
  modules: PropTypes.arrayOf(object),
};
Content.defaultProps = {
  modules: [
    {
      moduleName: 'Course Overview',
      duration: 124000,
      progress: 124000,
      content: [
        {
          name: 'Introduction',
          duration: 124000,
          isCompleted: true,
          isPlaying: false,
        },
      ],
    },
    {
      moduleName: 'Getting Started with Agular',
      duration: 2325000,
      progress: 600000,
      content: [
        {
          name: 'Introduction',
          duration: 175000,
          isCompleted: true,
          isPlaying: false,
        },
        {
          name: 'Practice Exercises',
          duration: 180000,
          isCompleted: true,
          isPlaying: false,
        },
        {
          name: 'Installing Git and Node',
          duration: 425000,
          isCompleted: true,
          isPlaying: false,
        },
        {
          name: 'Introduction to TypeScript',
          duration: 190000,
          isCompleted: false,
          isPlaying: true,
        },
        {
          name: 'Getting Started with the Agular CLI',
          duration: 190000,
          isCompleted: false,
          isPlaying: false,
        },
      ],
    },
  ],
};

export default Content;
