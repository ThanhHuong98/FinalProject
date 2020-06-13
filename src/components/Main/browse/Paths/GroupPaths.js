/* eslint-disable global-require */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList,
} from 'react-native';
import colorSource from '../../constants/color';
import ItemPath from './ItemPathBlockType';

const GroupPath = ({ groupName, paths, showSeeAllButton, onShowSeeAll, onClickItem }) => (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
          <Text style={styles.title}>{groupName}</Text>
          {showSeeAllButton
            ? <TouchableOpacity style={styles.seeAllBlock} onPress={onShowSeeAll}>
                <Text style={{ color: '#808080', fontSize: 14, marginRight: 5 }}>See all</Text>
                <Image style={{ width: 8, height: 8 }} source={require('../../../assets/common/right-arrow-icon.png')}/>
              </TouchableOpacity>
            : null}
      </View>
      <SafeAreaView style={styles.listContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={paths}
            renderItem={({ item }) => <ItemPath
                                          name={item.name}
                                          numOfCourses={item.numOfCourses}
                                          thumbnail={item.thumbnail}
                                          onChooseItem={onClickItem}/>}
            horizontal={true}/>
      </SafeAreaView>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  seeAllBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colorSource.black,
    fontSize: 18,
    fontWeight: '600',
  },
  titleBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

GroupPath.propTypes = {
  groupName: PropTypes.string,
  paths: PropTypes.arrayOf(object),
  showSeeAllButton: PropTypes.bool,
  onShowSeeAll: PropTypes.func,
  onClickItem: PropTypes.func,
};

GroupPath.defaultProps = {
  groupName: 'Paths',
  paths: [
    {
      name: 'CCSP (Certified Cloud Security Professional)',
      numOfCourses: 9,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
    },
    {
      name: 'AWS Certified Machine Learning',
      numOfCourses: 2,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png',
    },
    {
      name: '3ds Max: Environment Modeling',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight.imgix.net/paths/path-icons/3dsmax-008c85cd63.png',
    },
    {
      name: 'Node.js Developer on Microsoft Azure',
      numOfCourses: 3,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png',
    },
    {
      name: 'Salesforce Certified Administrator',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/salesforce-e8b45b03c6.png',
    },
    {
      name: 'Design Pattern in C++',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/c-plus-plus-34cdec5297.png',
    },
    {
      name: 'Managin Projects',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/pmp-3c8e439908.png',
    },
  ],
  showSeeAllButton: true,
};

export default GroupPath;
