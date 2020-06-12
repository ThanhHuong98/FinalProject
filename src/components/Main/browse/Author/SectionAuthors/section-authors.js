import React, { } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, View } from 'react-native';
import SectionAuthorsItem from '../SectionAuthorsItem/section-authors-item';
import { Colors, FontSize, Dimension, ScreenKey } from '../../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../../App';

const SectionAuthors = ({ title, data, navigation }) => {
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
                data={data}
                renderItem={({ item }) => (
                  <SectionAuthorsItem
                    title={item.name}
                    source={item.image}
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
