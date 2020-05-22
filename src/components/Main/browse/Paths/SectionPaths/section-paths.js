import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import SectionPathsItem from '../SectionPathsItems/section-paths-item';
import SectionTitle from '../../../../common/SectionTitle/section-title';
import { Colors, FontSize, Dimension, ScreenKey } from '../../../../../Constant/Constant';
import separator from '../../../../common/Separator/separator-side';

const SectionPaths = ({ title, data, navigation }) => {

  const onSeeMorePaths = () => {
    navigation.navigate(ScreenKey.Paths);
  };

  const onSeeDetailPath = () => {
    navigation.navigate(ScreenKey.DetailPath);
  };

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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
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
