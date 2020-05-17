import React, { } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, View} from 'react-native';
import SectionPopularSkillsItem from '../SectionPopularSkillsItem/section-popular-skills-item';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

const SectionPopularSkills = ({ title, data }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: 5 }}
    />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.items}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SectionPopularSkillsItem
            title={item.name}
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
export default SectionPopularSkills;
