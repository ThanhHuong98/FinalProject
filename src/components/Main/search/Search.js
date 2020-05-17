import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const Search = () => {
  const [search, updateSearch] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={(text) => updateSearch(text)}
        value={search}
        round={5}
        containerStyle={styles.search}
      />
      <View style={styles.center}>
        <Text style={styles.decription}>
          {' '}
          Over 7,000 courses at your fingertips
        </Text>
        <Text style={styles.decription}>
          Seach by title, author, or subjects.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Dimension.marginLarge,
    flex: 1
  },
  search: {
    backgroundColor: Colors.transparent,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
    padding: Dimension.paddingMedium,
  }
});
export default Search;
