/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, ScrollView, Image, Text, FlatList, StyleSheet,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import { formatHourType2 } from '../../utils/DateTimeUtils';
import CollapsableDescription from '../common/CollapsableDescription';
import colorSource from '../../constants/color';
import ListCourses from '../home/ListCourses';
import screenName from '../../constants/screen-name';

const PathDetails = ({
  id, name, thumbnail, numOfCourses, duration, description, courses, navigation,
}) => (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.info}>
            <View style={styles.titleBlock}>
                <Image source={{ uri: thumbnail }} style={styles.thumbnail}/>
                <View style={styles.infoBlock}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.extraInfo}>{numOfCourses} courses ∙ {formatHourType2(duration)}</Text>
                </View>
            </View>
            <CollapsableDescription description={description} minHeight={100}/>
        </View>

        <View style={styles.listCourses}>
            <ListCourses
                title={`${name} Courses`}
                onItemClick={(id) => navigation.push(screenName.CourseDetails)}/>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSource.white,
    height: '100%',
    width: '100%',
  },
  extraInfo: {
    color: colorSource.lightGray,
    fontSize: 14,
    marginTop: 3,
  },
  info: {
    backgroundColor: colorSource.darkBackground,
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  infoBlock: {
    marginLeft: 20,
  },
  listCourses: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  name: {
    color: colorSource.white,
    fontSize: 20,
    fontWeight: '600',
  },
  thumbnail: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  titleBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

PathDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  numOfCourses: PropTypes.number,
  thumbnail: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};

PathDetails.defaultProps = {
  name: 'CCSP (Certified Cloud Security Professional)',
  numOfCourses: 9,
  thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
  duration: 24000000,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
  courses: [],
};

export default PathDetails;
