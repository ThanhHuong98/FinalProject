import React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import SectionPathsItem from '../SectionPathsItems/section-paths-item';
import SectionTitle from '../../../common/SectionTitle/section-title';

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

const primaryColorBackground = '#000a12';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColorBackground,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default SectionPaths;
