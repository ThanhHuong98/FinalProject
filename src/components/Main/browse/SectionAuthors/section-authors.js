import React, { } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import SectionAuthorsItem from '../SectionAuthorsItem/aection-authors-item';

const SectionAuthors = ({ title, data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SectionAuthorsItem
            title={item.name}
            source={item.image}
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
  },
});
export default SectionAuthors;
