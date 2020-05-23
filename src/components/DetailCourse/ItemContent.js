/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../temp/color';
import { getPercentage } from '../../temp/utils/MathUtils';
import { formatHourType2 } from '../../temp/utils/DateTimeUtils';
import PopupMenu from '../common/PopupMenu/PopupMenu';

const ProgressBar = ({ progress, total }) => {
  const progressColor = progress === total ? colorSource.green : colorSource.white;
  const progressWidth = `${getPercentage(progress, total)}%`;
  return (
    <View style={styles.progressContainer}>
      <View style={{ ...styles.progress, width: progressWidth, backgroundColor: progressColor }}/>
    </View>
  );
};

const ItemLesson = ({
  name, duration, isCompleted, isPlaying,
}) => (
  <TouchableOpacity style={styles.lessonContainer}>
    {isPlaying
      ? <Image source={require('../../../assets/icon.png')} style={{ ...styles.lessonStatus, backgroundColor: colorSource.black }}/>
      : isCompleted
        ? <Image source={require('../../../assets/icon.png')} style={{ ...styles.lessonStatus, backgroundColor: colorSource.black }}/>
        : <View style={{ ...styles.lessonStatus, backgroundColor: colorSource.gray }}/>
    }
    <Text style={styles.lessonName}>{name}</Text>
    <Text style={styles.lessonDuration}>{formatHourType2(duration)}</Text>
  </TouchableOpacity>
);

const ItemSeparator = () => (
  <View style={styles.itemSeparator}/>
);

const Module = ({
  moduleName, index, duration, progress, content,
}) => (
  <View style={styles.moduleContainer}>
    <View style={styles.titleContainer}>
      <View style={styles.thumbnail}>
        <View style={styles.textThumbnailContainer}>
          <Text style={styles.textThumbnail}>{index}</Text>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress} total={duration}/>
        </View>
      </View>
      <View style={styles.moduleInfo}>
        <Text style={styles.moduleName}>{moduleName}</Text>
        <Text style={styles.moduleDuration}>{formatHourType2(duration)}</Text>
      </View>
      <PopupMenu
      />
    </View>

    <FlatList
      data={content}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ItemLesson
          name={item.name}
          duration={item.duration}
          isCompleted={item.isCompleted}
          isPlaying={item.isPlaying}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  itemSeparator: {
    height: 20,
  },
  lessonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  lessonDuration: {
    color: colorSource.lightGray,
    fontSize: 13,
  },
  lessonName: {
    color: colorSource.white,
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  lessonStatus: {
    borderRadius: 10,
    height: 10,
    width: 10,
  },
  moduleContainer: {
    backgroundColor: colorSource.black,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    width: '100%',
  },
  moduleDuration: {
    color: colorSource.lightGray,
    fontSize: 13,
  },
  moduleInfo: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 10,
  },
  moduleName: {
    color: colorSource.white,
    fontSize: 16,
    marginBottom: 5,
  },
  optionIcon: {
    height: '40%',
    width: 10,
  },
  progress: {
    height: '100%',
  },
  progressBar: {
    height: 4,
    width: '100%',
  },
  progressContainer: {
    backgroundColor: colorSource.lightGray,
    height: '100%',
    width: '100%',
  },
  textThumbnail: {
    color: colorSource.white,
    fontSize: 16,
    marginTop: 5,
  },
  textThumbnailContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  thumbnail: {
    alignItems: 'center',
    backgroundColor: colorSource.darkGray,
    flexDirection: 'column',
    height: 45,
    justifyContent: 'center',
    width: '15%',
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25,
    width: '100%',
  },
});

ProgressBar.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number,
};

ItemLesson.propTypes = {
  name: PropTypes.string,
  duration: PropTypes.number,
  isCompleted: PropTypes.bool,
  isPlaying: PropTypes.bool,
};

Module.propTypes = {
  moduleName: PropTypes.string,
  index: PropTypes.number,
  duration: PropTypes.number,
  progress: PropTypes.number,
  content: PropTypes.arrayOf(object),
};

Module.defaultProps = {
  moduleName: 'Getting Started with Agular',
  index: 1,
  duration: 2400000,
  progress: 600000,
  content: [
    {
      name: 'Introduction',
      duration: 180000,
      isCompleted: false,
      isPlaying: false,
    },
    {
      name: 'Practice Exercises',
      duration: 180000,
      isCompleted: false,
      isPlaying: true,
    },
    {
      name: 'Introduction to TypeScript',
      duration: 180000,
      isCompleted: true,
      isPlaying: false,
    },
  ],
};

export default Module;
