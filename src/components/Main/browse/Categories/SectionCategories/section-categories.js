/* eslint-disable import/no-cycle */
import React from 'react';
import {
  StyleSheet, FlatList, View, SafeAreaView, Text, ScrollView
} from 'react-native';
import ImageButton from '../../../../Common/ImageButton/image-button';
import { Colors, FontSize } from '../../../../../Constant/Constant';
import { getRandomColor } from '../../../../../utils/getRandomColor';
import { ThemeContext } from '../../../../../../App';

const SectionCategories = ({ title, categories, onClickItem }) => {
  const renderSeparator = () => (
    <View style={{ width: 15, height: 15 }} />
  );
  const renderSpaceHeader = () => (
    <View style={{ width: 10, height: 10 }} />
  );

  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.background }}>
          <SafeAreaView style={styles.container}>
            <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
            <FlatList
              style={styles.list}
              data={categories}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={renderSeparator}
              ListHeaderComponent={renderSpaceHeader}
              ListFooterComponent={renderSpaceHeader}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{ width: 150, flex: 1, marginHorizontal: 5 }}>
                  <ImageButton
                    title={item.name}
                    fontSize={20}
                    borderRadius={5}
                    bgColor={getRandomColor()}
                    onClickItem={() => onClickItem(item)}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>

        </ScrollView>
      )
    }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
  list: {
    marginTop: 10,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.xmedium,
    fontWeight: 'bold',
  },
});

export default SectionCategories;
