/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../constants/color';

const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: colorSource.borderColor }}/>
);

const AuthorResults = ({ results }) => (
    <View>

    </View>
);

AuthorResults.propTypes = {
  results: PropTypes.arrayOf(object),
};
export default AuthorResults;
