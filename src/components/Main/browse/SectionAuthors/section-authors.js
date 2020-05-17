import React, { } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, View } from 'react-native';
import SectionAuthorsItem from '../SectionAuthorsItem/aection-authors-item';
import { Colors, FontSize, Dimension } from '../../../../Constant/Constant';

const SectionAuthors = ({ title, data }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: Dimension.marginMedium }}
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
          <SectionAuthorsItem
            title={item.name}
            source={item.image}
          />
        )}
        ItemSeparatorComponent={separator}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
  },
  items: {
    paddingTop: Dimension.paddingXMedium,
    paddingBottom: Dimension.paddingXMedium,
  }
});
export default SectionAuthors;
