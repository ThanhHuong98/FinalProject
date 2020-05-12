import React, { } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import SectionPopularSkillsItem from '../SectionPopularSkillsItem/section-popular-skills-item';

const SectionPopularSkills = ({ title, data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SectionPopularSkillsItem
            title={item.name}
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
export default SectionPopularSkills;
