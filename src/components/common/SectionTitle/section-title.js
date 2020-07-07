import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const SectionTitle = ({ title, onChooseOption }) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <View style={styles.display}>
            <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
            <TouchableOpacity
              onPress={onChooseOption}
              style={styles.touch}
            >
              <Text style={styles.titleButton}>See all &gt;</Text>
            </TouchableOpacity>
          </View>
        )
      }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  display: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleButton: {
    color: 'white',
    fontSize: FontSize.small,
    padding: Dimension.paddingSmall,
    textAlign: 'center'
  },
  touch: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 25,
    width: '18%',
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
  },

});

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChooseOption: PropTypes.func.isRequired,
};

export default SectionTitle;
