/* eslint-disable react/require-default-props */
import React, { } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, FontSize, Dimension } from '../../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../../App';

const AuthorsItem = ({
  id, name, avatar, onChooseItem
}) => (
  <ThemeContext.Consumer>
    {
        ({ theme }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onChooseItem()}
          >
            <Image
              style={styles.imageCricle}
              source={{ uri: avatar }}
            />
            <Text style={{ ...styles.title, color: theme.textColor }}>{name}</Text>
          </TouchableOpacity>
        )
    }
  </ThemeContext.Consumer>
);

AuthorsItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  onChooseItem: PropTypes.func,
};

AuthorsItem.defaultProps = {
  avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
  name: 'Scottn Allen',
  onChooseItem: (f) => f,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
  },
  imageCricle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.xsmall,
    marginTop: Dimension.marginXSmall,
    textAlign: 'center',
  },
});
export default AuthorsItem;
