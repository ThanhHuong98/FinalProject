/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, Image,
} from 'react-native';
import { Colors } from '../../../Constant/Constant';
import { ThemeContext } from '../../../../App';

const CollapsableDescription = ({ minHeight, description, textColor }) => {
  const [isExpand, setExpand] = useState(false);
  const expandIcon = isExpand ? require('../../../../assets/course-detail/up-arrow-icon.png') : require('../../../../assets/course-detail/down-arrow-icon.png');
  const descHeight = isExpand ? null : minHeight;
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={styles.descContainer}>
            <Text style={{
              ...styles.textDesc, height: descHeight, color: theme.textColor
            }}
            >
              {description}
            </Text>
            <TouchableWithoutFeedback onPress={() => setExpand(!isExpand)}>
              <View style={styles.expandContainer}>
                <Image style={styles.expandIcon} source={expandIcon} resizeMode="contain" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        )
      }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  descContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  expandContainer: {
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 20,
  },
  expandIcon: {
    flex: 1,
    height: 12,
    width: 12,
  },
  textDesc: {
    flex: 1,
    fontSize: 14,
    marginRight: 10,
    textAlign: 'justify',
  },
});

CollapsableDescription.propTypes = {
  minHeight: PropTypes.number,
  description: PropTypes.string,
  textColor: PropTypes.number,
};

CollapsableDescription.defaultProps = {
  minHeight: 60,
  textColor: Colors.white,
};
export default CollapsableDescription;
