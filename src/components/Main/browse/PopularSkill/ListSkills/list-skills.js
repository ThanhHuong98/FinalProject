import React, { } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  View
} from 'react-native';
import ItemSkill from '../ItemSkill/item-skill';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey,
} from '../../../../../Constant/Constant';
import { ThemeContext } from '../../../../../../App';

const ListSkills = ({ title, skills, navigation }) => {
  const separator = () => (
    <View
      style={{ marginRight: 5 }}
    />
  );
  const onDetailSkill = () => {
    //navigation.navigate(ScreenKey.DetailPopularSkill);
  };

  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.items}
            horizontal
            data={skills}
            renderItem={({ item }) => (
              <ItemSkill
                name={item}
                onClickItem={() => onDetailSkill()}
              />
            )}
            // keyExtractor={(item) => item.id}
            ItemSeparatorComponent={separator}
          />
        </SafeAreaView>
      )
    }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
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
export default ListSkills;
