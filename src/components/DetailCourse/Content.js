/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes, { object } from 'prop-types';
import Module from './ItemContent';
import { Colors } from '../../Constant/Constant';

const ItemSeperator = () => (
  <View style={styles.separator} />
);

const Content = ({ modules, playingLesson, onClickLesson }) => (
  <FlatList
    data={modules}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={ItemSeperator}
    renderItem={({ item }) => (
      <Module
        moduleName={item.name}
        index={item.numberOrder}
        duration={(item.sumHours || 0) * 3600 * 1000}
        lessons={item.lesson}
        playingLesson={playingLesson}
        onClickLesson={(lessonId) => onClickLesson(item.id, lessonId)}
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
  playingLesson: PropTypes.string,
  onClickLesson: PropTypes.func,
};


export default Content;
