/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes, { object } from 'prop-types';
import GroupPath from './GroupPaths';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';

const renderSeparator = () => (
    <View style={{ height: 15 }}/>
);

const ListGroupPaths = ({ groupPaths, navigation }) => (
    <FlatList
        style={{ backgroundColor: colorSource.white }}
        data={groupPaths}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderSeparator}
        ListFooterComponent={renderSeparator}
        renderItem={({ item }) => <GroupPath
                                      groupName={item.groupName}
                                      paths={item.paths}
                                      onShowSeeAll={() => navigation.navigate(screenName.ListPaths)}
                                      onClickItem={() => navigation.navigate(screenName.PathDetails)}/>}/>
);

ListGroupPaths.propTypes = {
  groupPaths: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};
ListGroupPaths.defaultProps = {
  groupPaths: [
    {
      groupName: 'Conferences',
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
    },
    {
      groupName: 'Software Development',
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
    },
    {
      groupName: 'Conferences',
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
    },
  ],
};
export default ListGroupPaths;
