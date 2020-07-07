/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import { Colors } from '../../Constant/Constant';
import { getPercentage } from '../../utils/MathUtils';
import { formatHourType2 } from '../../utils/DateTimeUtils';
import PopupMenu from '../Common/PopupMenu/popup-menu';
import { ThemeContext } from '../../../App';

const ProgressBar = ({ progress, total }) => {
  const progressColor = progress === total ? Colors.green : Colors.white;
  const progressWidth = `${getPercentage(progress, total)}%`;
  return (
    <View style={styles.progressContainer}>
      <View style={{ ...styles.progress, width: progressWidth, backgroundColor: progressColor }}/>
    </View>
  );
};

const ItemLesson = ({
  name, duration, isCompleted, isPlaying, textColor
}) => (
  <TouchableOpacity style={styles.lessonContainer}>
    {isPlaying
      ? <Image source={require('../../../assets/icon.png')} style={{ ...styles.lessonStatus, backgroundColor: Colors.black }}/>
      : isCompleted
        ? <Image source={require('../../../assets/icon.png')} style={{ ...styles.lessonStatus, backgroundColor: Colors.black }}/>
        : <View style={{ ...styles.lessonStatus, backgroundColor: Colors.gray }}/>
    }
    <Text style={{ ...styles.lessonName, color: textColor}}>{name}</Text>
    <Text style={styles.lessonDuration}>{formatHourType2(duration)}</Text>
  </TouchableOpacity>
);

const ItemSeparator = () => (
  <View style={styles.itemSeparator}/>
);

const Module = ({
  moduleName, index, duration, progress, content,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => {
        return (
          <View style={{ ...styles.moduleContainer, backgroundColor: theme.background }}>
            <View style={styles.titleContainer}>
              <View style={styles.thumbnail}>
                <View style={styles.textThumbnailContainer}>
                  <Text style={{ ...styles.textThumbnail, color: theme.textColor }}>{index}</Text>
                </View>
                <View style={styles.progressBar}>
                  <ProgressBar progress={progress} total={duration}/>
                </View>
              </View>
              <View style={styles.moduleInfo}>
                <Text style={{ ...styles.moduleName, color: theme.textColor }}>{moduleName}</Text>
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
                  textColor={theme.textColor}
                />
              )}
            />
          </View>

        );
      }
    }
  </ThemeContext.Consumer>
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
    color: Colors.lightGray,
    fontSize: 13,
  },
  lessonName: {
    color: Colors.white,
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
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    width: '100%',
  },
  moduleDuration: {
    color: Colors.lightGray,
    fontSize: 13,
  },
  moduleInfo: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 10,
  },
  moduleName: {
    color: Colors.white,
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
    backgroundColor: Colors.lightGray,
    height: '100%',
    width: '100%',
  },
  textThumbnail: {
    color: 'red',
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
    backgroundColor: Colors.darkGray,
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
