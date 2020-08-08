/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React, { useEffect, useContext } from 'react';
import {
  View, ImageBackground, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ListCourses from '../../../../Courses/ListCourses/list-courses';
import { Colors, ScreenKey, FontSize } from '../../../../../Constant/Constant';
import { ThemeContext } from '../../../../../../App';
import { BrowseContext } from '../../../../providers/browse';
import NullImage from '../../../../../../assets/favorite/null.svg';

const DetailSectionCategories = ({
  route, navigation,
}) => {
  const category = route.params.data;
  const browseContext = useContext(BrowseContext);
  const onItemClick = (course) => {
    navigation.push(ScreenKey.DetailScreen, { screen: ScreenKey.DetailCourse, params: { course } });
  };
  useEffect(() => {
    browseContext.getCategoryDetails(category.id);
  }, []);
  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>

          {
              browseContext.state.categoryDetails.length === 0
                ? (
                  <View style={styles.center}>
                    <NullImage width={80} height={80} style={{ fill: '#bdbdbd' }} />
                    <Text style={styles.decription}>
                      Không có khoá học thuộc danh mục này.
                    </Text>
                  </View>
                )
                : (
                  <View style={{ ...styles.container, backgroundColor: theme.background }}>
                    <ImageBackground
                      source={{ uri: 'https://www.parkersoftware.com/wp-content/uploads/2018/02/computer-2583383_1920-1024x683.jpg' }}
                      style={styles.thumbnail}
                      resizeMode="cover"
                    >
                      <View style={styles.info}>
                        <Text style={{ ...styles.name }}>{category.name}</Text>
                        <Text style={styles.extraInfo}>
                          {browseContext.state.categoryDetails.length}
                          {' '}
                          courses
                          {' '}
                        </Text>
                      </View>

                    </ImageBackground>
                    <View style={styles.listCourses}>
                      <ListCourses
                        title="Các khoá học"
                        courses={browseContext.state.categoryDetails}
                        onItemClick={(item) => onItemClick(item)}
                      />
                    </View>

                  </View>
                )
            }
        </View>
      )
    }
    </ThemeContext.Consumer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  extraInfo: {
    color: Colors.lightGray,
    fontSize: 14,
    marginTop: 10,
  },
  info: {
    padding: 15,
    backgroundColor: 'rgba(255,0,0,.01)',
    height: '200%',
    width: '100%',
  },
  listCourses: {
    marginTop: 5,
    flex: 1,
  },
  name: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  thumbnail: {
    height: 100,
    width: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
    marginTop: 15,
  }
});

DetailSectionCategories.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

DetailSectionCategories.defaultProps = {
};

export default DetailSectionCategories;
