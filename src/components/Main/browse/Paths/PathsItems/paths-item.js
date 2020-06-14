import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Colors, FontSize, Dimension } from '../../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../../App';

const SectionPathsItem = ({
  nameCourse,
  numberOfCourse,
  srcImage,
  onSeeDetail
}) => {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <TouchableOpacity
              style={{ ...styles.itemContainer, backgroundColor: theme.itemColor }}
              onPress={onSeeDetail}
              >
              <Image
                style={styles.image}
                source={{ uri: srcImage }}
              />
              <View style={styles.content}>
                <Text style={{ ...styles.title, marginBottom: 6, color: theme.textColor }}>{nameCourse}</Text>
                <Text style={{ ...styles.subtitile, marginBottom: 4, color: theme.subTextColor }}>{ `${numberOfCourse} courses` }</Text>
              </View>
            </TouchableOpacity>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    width: 200,
    height: 180,
    backgroundColor: Colors.secondaryColor,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: 200,
    height: 90,
    backgroundColor: Colors.white,
  },
  content: {
    padding: Dimension.paddingXMedium,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xxsmall,
  },
  subtitile: {
    color: Colors.greyWhite,
    fontSize: FontSize.small,
  },
});
export default SectionPathsItem;
