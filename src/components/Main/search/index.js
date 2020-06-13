/* eslint-disable global-require */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text, Image,
} from 'react-native';
import ItemRecentSearch from './ItemRecentSearch';
import colorSource from '../../constants/color';

const verticalSeparator = () => (
    <View style={styles.verticalSeparator}/>
);

const ItemInterest = ({ name }) => (
    <TouchableOpacity style={styles.itemInterestContainer}>
        <Text style={styles.itemInterestText}>{name}</Text>
    </TouchableOpacity>
);

const Search = ({ recentSearches, interests }) => (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('../../../assets/search/search-icon.png')} style={styles.iconSearch}/>
        <TextInput style={styles.textInput} placeholder='Search...' placeholderTextColor={colorSource.lightGray} returnKeyType='search' autoFocus={true}/>
      </View>
        <ScrollView style={styles.content}>
            {recentSearches && recentSearches.length > 0
              ? <View style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.blockTitleText}>Recent searches</Text>
                        <TouchableOpacity>
                          <Image source={require('../../../assets/search/clear-icon.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={recentSearches}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent = {verticalSeparator}
                        renderItem={({ item }) => <ItemRecentSearch searchKey = {item.name}/>}
                    />
                 </View>
              : null
            }
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Your interests</Text>
                <View style={styles.interestsBlock}>
                   {interests.map((item, index) => <ItemInterest key={index} name={item.name}/>)}
                </View>
            </View>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
  block: {
    marginTop: 20,
  },
  blockTitle: {
    alignItems: 'center',
    color: colorSource.black,
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  blockTitleText: {
    color: colorSource.black,
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    backgroundColor: colorSource.white,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  content: {
    height: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  iconSearch: {
    height: 15,
    width: 15,
  },
  interestsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemInterestContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  itemInterestText: {
    color: colorSource.white,
    fontSize: 12,
  },
  searchBar: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textInput: {
    color: colorSource.white,
    fontSize: 17,
    marginLeft: 10,
    width: '100%',
  },
  verticalSeparator: {
    height: 20,
  },
});

Search.propTypes = {
  recentSearches: PropTypes.arrayOf(object),
  interests: PropTypes.arrayOf(object),
};

ItemInterest.propTypes = {
  name: PropTypes.string,
};

Search.defaultProps = {
  recentSearches: [
    {
      name: 'Android',
    },
    {
      name: 'Java',
    },
  ],
  interests: [
    {
      name: 'Android',
    },
    {
      name: 'Git',
    },
    {
      name: 'Java',
    },
    {
      name: 'Agular',
    },
    {
      name: 'React',
    },
    {
      name: 'React Native',
    },
    {
      name: 'Redux',
    },
    {
      name: 'C/C++',
    },
    {
      name: 'REST',
    },
    {
      name: 'Spring',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Spring',
    },
  ],
};

export default Search;
