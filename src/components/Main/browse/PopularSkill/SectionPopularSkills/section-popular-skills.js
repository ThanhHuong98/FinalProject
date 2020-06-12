import React, { } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  View
} from 'react-native';
import SectionPopularSkillsItem from '../SectionPopularSkillsItem/section-popular-skills-item';
import {
  Colors,
  FontSize,
  Dimension,
  ScreenKey,
} from '../../../../../Constant/Constant';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../../../App';

const SectionPopularSkills = ({ title, data, navigation }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: 5 }}
      />
    );
  };
  const onDetailSkill = () => {
    navigation.navigate(ScreenKey.DetailPopularSkill);
  };

  return (
    <ThemeContext.Consumer>
      {
      ({ theme }) => {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={{...styles.title, color: theme.textColor }}>{title}</Text>
            <FlatList
              style={styles.items}
              horizontal
              data={data}
              renderItem={({ item }) => (
                <SectionPopularSkillsItem
                  title={item.name}
                  onChooseOption={onDetailSkill}
                />
              )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={separator}
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
export default SectionPopularSkills;
