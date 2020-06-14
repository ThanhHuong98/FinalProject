/* eslint-disable import/no-cycle */
import React, { } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  View
} from 'react-native';
// eslint-disable-next-line import/no-cycle
import PropTypes from 'prop-types';
import AuthorsItem from '../AuthorsItem/authors-item';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey
} from '../../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../../App';

const ListAuthors = ({ title, authors, navigation }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: Dimension.marginMedium }}
      />
    );
  };

  const onSeeDetailAuthor = () => {
    navigation.navigate(ScreenKey.DetailAuthor);
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          return (
            <SafeAreaView style={styles.container}>
              <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
              <FlatList
                style={styles.items}
                horizontal
                data={authors}
                renderItem={({ item }) => (
                  <AuthorsItem
                    name={item.name}
                    avatar={item.avatar}
                    onChooseOption={onSeeDetailAuthor}
                  />
                )}
                ItemSeparatorComponent={separator}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

ListAuthors.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object,
};
ListAuthors.defaultProps = {
  title: 'List Authors',
  authors: [
    {
      name: 'Deborah Kurata',
      avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
    },
    {
      name: 'Scott Allen',
      avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
    },
    {
      name: 'Samer Buna',
      avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
    },
    {
      name: 'Mark Zamoyta',
      avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
    },
    {
      name: 'Jim Wilson',
      avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
    },
    {
      name: 'Joe Eames',
      avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
    {
      name: 'Cory House',
      avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
    },
    {
      name: 'Shawn Wildermuth',
      avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
    },
  ],
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
export default ListAuthors;
