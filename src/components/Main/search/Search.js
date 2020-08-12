/* eslint-disable import/no-cycle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable global-require */
import React, {
  useContext, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text, Image, Keyboard,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AnimatedLoader from 'react-native-animated-loader';
import ItemRecentSearch from './ItemRecentSearch';
import { Colors, ScreenKey } from '../../../Constant/Constant';
import { ThemeContext, LanguageContext } from '../../../../App';
import ClearIcon from '../../../../assets/search/clear-icon.svg';
import { SearchContext } from '../../providers/search';
import ListCourses from '../../Courses/ListCourses/list-courses';
import ItemAuthorResult from './ItemAuthorResult';
// import NoDataIcon from '../../../assets/common/no-data-icon.svg';

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
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
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
              placeholder={`${lang.Search}...`}
              placeholderTextColor={Colors.lightGray}
              returnKeyType="search"
              onSubmitEditing={() => handleSearch()}
              onChangeText={(v) => handleChangeText(v)}
            />
            {
        value.length !== 0
          ? (
            <TouchableWithoutFeedback onPress={() => handleCancelSearch()}>
              <Image
                source={require('../../../../assets/common/cancel-icon.png')}
                style={{ ...styles.iconSearch, marginLeft: 10 }}
              />
            </TouchableWithoutFeedback>
          )
          : null
      }
          </View>

        )
      }
    </LanguageContext.Consumer>
  );
};
const Search = ({ navigation }) => {
  const searchContext = useContext(SearchContext);
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);

  console.log('search context: ', searchContext);
  const handleChooseItem = (name) => {
    handleSearch(name);
    setSearchKey(name);
  };
  const handleCancel = () => {
    setSearchKey('');
    setIsSearching(false);
    setSelectedTab(1);
  };
  const handleSearch = (value) => {
    console.log('search key: ', value);
    if (value && value.length !== 0) {
      Keyboard.dismiss();
      searchContext.performSearch(searchContext.state.recentSearch || [], value, 1);
      setIsSearching(true);
    }
  };
  const handleInputKey = (value) => {
    if (value.length === 0) setIsSearching(false);
    setSearchKey(value);
  };

  const handleClickCourse = (course) => {
    navigation.push(ScreenKey.DetailScreen, { screen: ScreenKey.DetailCourse, params: { course } });
  };

  const handleClickAuthor = (id) => {
    navigation.push(ScreenKey.DetailScreen, { screen: ScreenKey.DetailAuthor, params: {id }});
  };

  const renderSeparator = (dividerColor) => (
    <View style={{ height: 1, backgroundColor: dividerColor }} />
  );
  const renderFooter = () => (
    <View style={{ height: 20 }} />
  );
  console.log('info tac gia: ,,,,', searchContext.state.searchResult.instructors.data);
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
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
                                  <Text style={{ ...styles.blockTitleText, color: theme.textColor }}>{lang.RecentSearch}</Text>
                                  <TouchableOpacity onPress={() => searchContext.clearRecentSearch()}>
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
                          <Text style={{ ...styles.blockTitle, color: theme.textColor }}>{lang.PopularSearch}</Text>
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
                      <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <View style={styles.tabContainer}>
                          <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(1)}>
                            <Text
                              style={selectedTab === 1 ? styles.selectedTabText : { ...styles.tabText, color: theme.textColor }}
                            >
                              {lang.Course}
                            </Text>
                          </TouchableOpacity>
                          <View style={{ height: '100%', width: 2, backgroundColor: theme.textColor }} />
                          <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(2)}>
                            <Text
                              style={selectedTab === 2 ? styles.selectedTabText : { ...styles.tabText, color: theme.textColor }}
                            >
                              {lang.Author}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20 }}>
                          {
                            selectedTab === 1
                              ? (
                                <ListCourses
                                  title=""
                                  courses={searchContext.state.searchResult.courses.data}
                                  onItemClick={(courseId) => handleClickCourse(courseId)}
                                />
                              )
                              : (
                                <FlatList
                                  style={styles.listAuthors}
                                  horizontal={false}
                                  data={searchContext.state.searchResult.instructors.data}
                                  renderItem={({ item }) => (
                                    <ItemAuthorResult
                                      name={item.name}
                                      avatar={item.avatar}
                                      numOfCourses={item.numcourses}
                                      textColor={theme.textColor}
                                      onItemClick={() => handleClickAuthor(item.id)}
                                    />
                                  )}
                                  showsVerticalScrollIndicator={false}
                                  ItemSeparatorComponent={() => renderSeparator(theme.dividerLine)}
                                  ListFooterComponent={() => renderFooter()}
                                  ListEmptyComponent={() => (
                                    <View style={styles.emptyComponent}>
                                      {/* <NoDataIcon width={50} height={50} /> */}
                                      <Text style={{ fontSize: 14, color: theme.textColor, marginTop: 15 }}>{lang.NoAuthors}</Text>
                                    </View>
                                  )}
                                />
                              )
                          }
                        </View>
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

        )
      }
    </LanguageContext.Consumer>
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
  emptyComponent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    marginBottom: '5%',
    marginTop: '60%',
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
  listAuthors: {
    paddingHorizontal: 15,
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
  selectedTabText: {
    color: Colors.blue,
    fontSize: 17,
    fontWeight: 'bold',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  tabText: {
    fontSize: 17,
    fontWeight: 'bold',
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
