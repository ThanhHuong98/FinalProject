import React, { } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionAuthors from './Author/SectionAuthors/section-authors';
import SectionPopularSkills from './PopularSkill/SectionPopularSkills/section-popular-skills';
import ImageButton from '../../common/ImageButton/image-button';
import SectionPaths from './Paths/SectionPaths/section-paths';
import SectionCategories from './SectionCategories/section-categoties';
import { Colors, Dimension, ScreenKey } from '../../../Constant/Constant';
import { categories, authors, popularSkills, paths } from '../../../data/dataTest';

const Browse = ({ navigation }) => {
  const onRelease = () => {
    navigation.navigate(ScreenKey.NewRelease);
  };

  const onRecommened = () => {
    navigation.navigate(ScreenKey.Recommened);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.groupButton}>
          <ImageButton
            style={styles.imageButton}
            title="NEW RELEASE"
            onChooseOption={onRelease}
            srcImage={categories.data[0].srcImage}
          />
          <ImageButton
            style={styles.imageButton}
            title="RECOMMENDED FOR YOU"
            onChooseOption={onRecommened}
            srcImage={categories.data[1].srcImage}
          />
        </View>
        <SectionPopularSkills
          title="Popular Skills"
          data={popularSkills.data}
          navigation={navigation}
        />
        <SectionCategories
          title="Top categories"
          data={categories.data}
        />
        <SectionPaths
          title="Paths"
          data={paths.data}
          navigation={navigation}
        />
        <SectionAuthors
          title="Top Authors"
          data={authors.data}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginLeft: Dimension.marginMedium,
    marginRight: Dimension.marginMedium,
    justifyContent: 'space-between',
  },
  groupButton: {
    height: Dimension.xheight,
    justifyContent: 'space-around',
    marginBottom: Dimension.marginMedium,
  },

});
export default Browse;
