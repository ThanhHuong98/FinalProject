/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
import React, { useContext, useState, useRef } from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text, Image, Keyboard
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AnimatedLoader from 'react-native-animated-loader';
import ItemRecentSearch from './ItemRecentSearch';
import { Colors } from '../../../Constant/Constant';
import { ThemeContext } from '../../../../App';
import { SearchContext } from '../../providers/search';
import ClearIcon from '../../../../assets/search/clear-icon.png';
import ListCourses from '../../Courses/ListCourses/list-courses';
const verticalSeparator = () => (
  <View style={styles.verticalSeparator} />
);

const ItemPopular = ({ name, onClick }) => (
  <TouchableOpacity style={styles.itemInterestContainer} onPress={() => onClick()}>
    <Text style={styles.itemInterestText}>{name}</Text>
  </TouchableOpacity>
);

const SearchBar = ({
  value = '',
  onChangeKey = (f) => f,
  onSearch = (f) => f,
  onCancel = (f) => f,
}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    onSearch();
  };
  const handleChangeText = (v) => {
    onChangeKey(v);
  };
  const handleCancelSearch = () => {
    onCancel();
    Keyboard.dismiss();
  };
  return (
    <View style={styles.searchBar}>
      {
      value.length === 0
        ? (
          <Image
            source={require('../../../../assets/search/search-icon.png')}
            style={{ ...styles.iconSearch, marginRight: 10 }}
          />
        )
        : null
    }
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={value}
        placeholder="Search..."
        placeholderTextColor={Colors.lightGray}
        returnKeyType="search"
        onSubmitEditing={() => handleSearch()}
        onChangeText={(v) => handleChangeText(v)}
      />
      {
      value.length !== 0
        ? (
          <TouchableWithoutFeedback onPress={() => handleCancelSearch()}>
            {/* <Image
              source={require('../../../../assets/common/cancel-icon.png')}
              style={{ ...styles.iconSearch, marginLeft: 10 }}
            /> */}
          </TouchableWithoutFeedback>
        )
        : null
    }
    </View>
  );
};
const Search = ({ navigation }) => {

  const searchContext = useContext(SearchContext);
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleChooseItem = (name) => {
    handleSearch(name);
    setSearchKey(name);
  };
  const handleCancel = () => {
    setSearchKey('');
    setIsSearching(false);
  };
  const handleSearch = (value) => {
    if (value && value.length !== 0) {
      Keyboard.dismiss();
      searchContext.performSearch(value, 1);
      setIsSearching(true);
    }
  };
  const handleInputKey = (value) => {
    if (value.length === 0) setIsSearching(false);
    setSearchKey(value);
  };
  return (
    <ThemeContext.Consumer>
      {
    ({ theme }) => (
      <View style={{ ...styles.container, backgroundColor: theme.background }}>
        <SearchBar
          value={searchKey}
          onChangeKey={(value) => handleInputKey(value)}
          onCancel={() => handleCancel()}
          onSearch={() => handleSearch(searchKey)}
        />
        <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
          {
            !isSearching
              ? (
                <View>
                  {
                    searchContext.state.recentSearch && searchContext.state.recentSearch.length > 0
                      ? (
                        <View style={styles.block}>
                          <View style={styles.blockTitle}>
                            <Text style={{ ...styles.blockTitleText, color: theme.textColor }}>Recent searches</Text>
                            <TouchableOpacity>
                              <ClearIcon width={20} height={20} style={{ fill: theme.textColor }} />
                            </TouchableOpacity>
                          </View>
                          <FlatList
                            data={searchContext.state.recentSearch}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={verticalSeparator}
                            renderItem={({ item }) => (
                              <ItemRecentSearch
                                searchKey={item}
                                onClick={() => handleChooseItem(item)}
                              />
                            )}
                          />
                        </View>
                      )
                      : null
                  }
                  <View style={styles.block}>
                    <Text style={{ ...styles.blockTitle, color: theme.textColor }}>Tìm kiếm phổ biến</Text>
                    <View style={styles.interestsBlock}>
                      {
                        searchContext.state.populars.map((item, index) => (
                          <ItemPopular
                            key={index}
                            name={item}
                            onClick={() => handleChooseItem(item)}
                          />
                        ))
                      }
                    </View>
                  </View>
                </View>
              )
              : (
                <View style={{ marginTop: 20 }}>
                  <ListCourses
                    title="Kết quả tìm kiếm"
                    courses={searchContext.state.searchResult}
                  />
                </View>
              )
          }
          <AnimatedLoader
            visible={searchContext.state.isLoading}
            overlayColor="rgba(0,0,0,0.65)"
            source={require('../../../../assets/common/loader.json')}
            animationStyle={styles.loading}
            speed={2}
          />
        </ScrollView>
      </View>
    )
  }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: 20,
  },
  blockTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  blockTitleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  content: {
    height: '100%',
    paddingHorizontal: 10,
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
    backgroundColor: Colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  itemInterestText: {
    color: Colors.white,
    fontSize: 12,
  },
  loading: {
    height: 100,
    width: 100,
  },
  searchBar: {
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textInput: {
    color: Colors.white,
    flex: 1,
    fontSize: 17,
  },
  verticalSeparator: {
    height: 20,
  },
});

Search.propTypes = {
};

ItemPopular.propTypes = {
  name: PropTypes.string,
};

Search.defaultProps = {
  navigation: PropTypes.object,
};

export default Search;
