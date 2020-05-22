import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';
import { Colors, FontSize } from '../../Constant/Constant';
import IConButton from '../common/IconButton/icon-button';
import Icon from '../common/Icon/icon';
import Separator from '../common/Separator/separator';
import { course } from '../../data/dataTest';


const DetailCourse = () => {
  const GroupOptions = () => {
    return (
      <View style={styles.optionWrapper}>
        <Icon
          title="Bookmark"
          icon=""
        />
        <Icon
          title="Add to channel"
          icon=""
        />
        <Icon
          title="Downloads"
          icon=""
        />
      </View>
    );
  };
  const Decriptions = () => {
    return (
    <Text style={styles.decription}>{course.decription}</Text>
    );
  };
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.subtitile}>{ `${course.level} . ${course.dateTime} . ${course.interval}h`}</Text>
        <GroupOptions />
        <Separator />
        <Decriptions />
        <IConButton
          title="Related paths and courses"
        />
        <View style={{marginBottom: 15}}></View>
        <IConButton
          title="Take a learning checks"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  video: {
    width: '100%',
    height: 300,
  },
  body: {
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold'
  },
  subtitile: {
    color: Colors.greyWhite,
    fontSize: FontSize.xsmall,
  },
  decription: {
    width: '100%',
    color: Colors.greyWhite,
    fontSize: FontSize.medium,
  },
  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,

  }
});
export default DetailCourse;
