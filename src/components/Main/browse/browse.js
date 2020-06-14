import React, { } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
import SectionAuthors from './Author/ListAuthors/list-authors';
// eslint-disable-next-line import/no-cycle
import SectionPopularSkills from './PopularSkill/SectionPopularSkills/section-popular-skills';
import ImageButton from '../../common/ImageButton/image-button';
// eslint-disable-next-line import/no-cycle
import SectionPaths from './Paths/ListPaths/list-paths';
import SectionCategories from './Categories/section-categoties';
import { Dimension, ScreenKey } from '../../../Constant/Constant';
import {
  categories,
  authors,
  popularSkills,
  paths
} from '../../../data/dataTest';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../../../App';

const Browse = ({ navigation }) => {
  const onRelease = () => {
    navigation.navigate(ScreenKey.NewRelease);
  };

  const onRecommened = () => {
    navigation.navigate(ScreenKey.Recommened);
  };
  return (
    <ThemeContext.Consumer>
      {
         ({ theme }) => {
           return (
             <View style={{ ...styles.container, backgroundColor: theme.background }}>
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
                  //  title={null}
                  //  authors={null}
                   navigation={navigation}
                 />
               </ScrollView>
             </View>
           );
         }
      }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    padding: Dimension.paddingMedium,
  },
  groupButton: {
    height: Dimension.xheight,
    justifyContent: 'space-around',
    marginBottom: Dimension.marginMedium,
  },

});
export default Browse;
