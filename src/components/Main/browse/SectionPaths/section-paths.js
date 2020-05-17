import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import SectionPathsItem from '../SectionPathsItems/section-paths-item';
import SectionTitle from '../../../common/SectionTitle/section-title';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

const SectionPaths = ({ title, data }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: Dimension.marginMedium }}
    />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionTitle
        title={title}
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
