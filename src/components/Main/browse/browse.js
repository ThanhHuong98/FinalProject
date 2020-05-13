import React, { } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionAuthors from './SectionAuthors/section-authors';
import SectionPopularSkills from './SectionPopularSkills/section-popular-skills';
import ImageButton from '../../common/ImageButton/image-button';
import SectionPaths from './SectionPaths/section-paths';
import SectionCategories from './SectionCategories/section-categoties';
import { Colors, Dimension } from '../../../Constant/Constant';
import { categories, authors, popularSkills, paths } from '../../../data/dataTest';

const Browse = () => {
  const onClick = () => {
    //
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.groupButton}>
        <ImageButton
          style={styles.imageButton}
          title="NEW RELEASE"
          onChooseOption={onClick}
          srcImage={categories.data[0].srcImage}
        />
        <ImageButton
          style={styles.imageButton}
          title="RECOMMENDED FOR YOU"
          onChooseOption={onClick}
          srcImage={categories.data[1].srcImage}
        />
      </View>
      <SectionPopularSkills
        title="Popular Skills"
        data={popularSkills.data}
      />
      <SectionCategories
        // title='Top categories'
        data={categories.data}
      />
      <SectionPaths
        title="Paths"
        data={paths.data}
      />
      <SectionAuthors
        title="Top Authors"
        data={authors.data}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginLeft: Dimension.marginMedium,
    marginRight: Dimension.marginMedium,
    marginTop: Dimension.marginLarge,
    justifyContent: 'space-between',
  },
  groupButton: {
    height: Dimension.xheight,
    justifyContent: 'space-around'
  }
});
export default Browse;
