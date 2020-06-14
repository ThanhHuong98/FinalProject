import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import SectionPathsItem from '../PathsItems/paths-item';
// eslint-disable-next-line import/no-cycle
import SectionTitle from '../../../../common/SectionTitle/section-title';
import { Colors, FontSize, Dimension, ScreenKey } from '../../../../../Constant/Constant';
import separator from '../../../../common/Separator/separator-side';
import { ThemeContext } from '../../../../../../App';

const SectionPaths = ({ title, data, navigation }) => {

  const onSeeMorePaths = () => {
    navigation.navigate(ScreenKey.Paths);
  };

  const onSeeDetailPath = () => {
    navigation.navigate(ScreenKey.DetailPath);
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <SafeAreaView style={styles.container}>
              <SectionTitle
                title={title}
                onChooseOption={onSeeMorePaths}
              />
              <FlatList
                style={styles.items}
                horizontal
                data={data}
                renderItem={({ item }) => (
                  <SectionPathsItem
                    nameCourse={item.nameCourse}
                    srcImage={item.srcImage}
                    numberOfCourse={item.numberOfCourse}
                    onSeeDetail={onSeeDetailPath}
                  />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={separator}
              />
            </SafeAreaView>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
  items: {
    paddingTop: Dimension.paddingXMedium,
    paddingBottom: Dimension.paddingXMedium,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
  },
});

export default SectionPaths;
