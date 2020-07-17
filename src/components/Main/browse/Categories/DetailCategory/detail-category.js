/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React, { useEffect, useContext } from 'react';
import {
  View, ScrollView, ImageBackground, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { formatHourType2 } from '../../../../../utils/DateTimeUtils';
import CollapsableDescription from '../../../../Common/Pannel/collapsable-description';
import ListCourses from '../../../../Courses/ListCourses/list-courses';
import { Colors, ScreenKey } from '../../../../../Constant/Constant';
import { ThemeContext } from '../../../../../../App';
import { BrowseContext } from '../../../../providers/browse';

const DetailSectionCategories = ({
  route, navigation,
}) => {
  const category = route.params.data;
  const browseContext = useContext(BrowseContext);
  useEffect(() => {
    browseContext.getCategoryDetails(category.id);
  }, []);
  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => (
        <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.container, backgroundColor: theme.background }}>
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
              onItemClick={(courseId) => navigation.navigate(ScreenKey.DetailCourse)}
            />
          </View>
        </ScrollView>
      )
    }
    </ThemeContext.Consumer>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
    marginTop: 30,
  },
  name: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  thumbnail: {
    flex: 1,
    height: '200%',
    width: '100%',
  },
});

DetailSectionCategories.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

DetailSectionCategories.defaultProps = {
};

export default DetailSectionCategories;
