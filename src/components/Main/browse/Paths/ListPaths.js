/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemPath from './ItemPathRowType';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';

const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: colorSource.borderColor }}/>
);

const ListPaths = ({ paths, navigation }) => (
    <FlatList
        style={{ backgroundColor: colorSource.white, paddingHorizontal: 15 }}
        data={paths}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => <ItemPath
                                    name={item.name}
                                    thumbnail={item.thumbnail}
                                    numOfCourses={item.numOfCourses}
                                    onChooseItem={() => navigation.navigate(screenName.PathDetails)}/>}
    />
);

ListPaths.propTypes = {
  paths: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};

ListPaths.defaultProps = {
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
};

export default ListPaths;
