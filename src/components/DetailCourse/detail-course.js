import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import { Video } from 'expo-av';
import Star from 'react-native-star-view';
import { Colors, FontSize, Dimension } from '../../Constant/Constant';
import IConButton from '../common/IconButton/icon-button';
import Icon from '../common/Icon/icon';
import { course } from '../../data/dataTest';
import Panel from '../common/Pannel/pannel';
import AuthorItem from './item-athor';
import separator from '../common/Separator/separator-side';
import Content from './Content';


const DetailCourse = () => {
  const GroupOptions = () => {
    return (
      <View style={styles.optionWrapper}>
        <Icon
          title="Bookmark"
          icon="ios-bookmark"
        />
        <Icon
          title="Add to channel"
          icon="ios-code"
        />
        <Icon
          title="Downloads"
          icon="ios-download"
        />
      </View>
    );
  };
  const AuthorsList = ({ data }) => {
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <AuthorItem
            title={item}
            // onChooseOption={()}
          />
        )}
        ItemSeparatorComponent={separator}
      />
    );
  };
  const Separator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginBottom: Dimension.marginMedium,
        }}
      />
    );
  };
  const ExtendAction = () => {
    return (
      <View style={styles.extendAction}>
        <IConButton
          title="Related paths and courses"
          iconName="ios-albums"
        />
        <IConButton
          title="Take a learning checks"
          iconName="ios-disc"
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <Text style={{ ...styles.title, marginBottom: 10 }}>{course.name}</Text>
          <AuthorsList data={course.authors} />
          <Text style={{ ...styles.subtitile, marginBottom: 10, marginTop: 10}}>{ `${course.level} . ${course.dateTime} . ${course.interval}h`}</Text>
          <Star score={course.rating} style={styles.starStyle} />
          <GroupOptions />
          <Separator />
          <Panel
            content={course.decription}
          />
          <ExtendAction />
          <Content />
        </View>
      </ScrollView>
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
    marginLeft: Dimension.marginMedium,
    marginRight: Dimension.marginMedium,
    marginTop: Dimension.marginMedium,
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
  extendAction: {
    marginTop: Dimension.marginMedium,
    height: 120,
    justifyContent: 'space-around'
  },
  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  starStyle: {
    width: 100,
    height: 20,
  },
});
export default DetailCourse;
