import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import SectionPathsItem from '../SectionPathsItems/section-paths-item';
import SectionTitle from '../../../common/SectionTitle/section-title';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

const SectionPaths = ({ title, data }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <SectionTitle
        title={title}
      />
      <FlatList
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
    marginLeft: Dimension.medium,
  },
});

export default SectionPaths;
