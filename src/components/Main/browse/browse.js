/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import SectionAuthors from './Author/ListAuthors/list-authors';
import ImageButton from '../../Common/ImageButton/image-button';
import SectionCategories from './Categories/SectionCategories/section-categories';
import { Dimension, ScreenKey, Colors } from '../../../Constant/Constant';
import { ThemeContext } from '../../../../App';
import { BrowseContext } from '../../providers/browse';

const Browse = ({ navigation }) => {
  // const onSetting = () => {
  //   navigation.navigate(ScreenKey.Setting);
  // };
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     // headerRight: () => (
  //     //   <Button
  //     //     onPress={() => onSetting()}
  //     //     title="Setting"
  //     //   />
  //     // ),
  //   });
  // }, [navigation]);

  const onNewRelease = (category, title) => {
    navigation.navigate(ScreenKey.AllCourses, { category, title });
  };

  const onRecommened = (category, title) => {
    navigation.navigate(ScreenKey.AllCourses, { category, title });
  };
  const browseContext = useContext(BrowseContext);
  useEffect(() => {
    browseContext.getCategory();
    browseContext.getAuthor();
  }, []);

  const onClickCategory = (categoryItem) => {
    // navigation.navigate(ScreenKey.CategoryListDetails, { data: categoryItem });
    navigation.navigate(ScreenKey.DetailCategory, { data: categoryItem });
  };

  const onClickAuthor = (author) => {
    navigation.navigate(ScreenKey.DetailAuthor, { id: author.id });
  };

  return (
    <ThemeContext.Consumer>
      {
         ({ theme }) => (
           <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.background }}>
             <View style={{ ...styles.container }}>
               <View style={styles.groupButton}>
                 <ImageButton
                   style={styles.imageButton}
                   title="NEW RELEASE"
                   onClickItem={() => onNewRelease('TOP_NEW', 'Các khóa học mới')}
                   thumbnail="https://pluralsight.imgix.net/course-images/whats-new-vsphere-6-5-v1.jpg"
                 />
                 <ImageButton
                   style={styles.imageButton}
                   title="RECOMMENDED FOR YOU"
                   onClickItem={() => onRecommened('RECOMMENDED', 'Có thể bạn quan tâm')}
                   thumbnail="https://cdn.dribbble.com/users/13774/screenshots/11120020/freeapril_4x.jpg"
                 />
               </View>
               <SectionCategories
                 title="Top categories"
                 categories={browseContext.state.categories}
                 onClickItem={(category) => onClickCategory(category)}
               />
               <SectionAuthors
                 title="Top Authors"
                 authors={browseContext.state.authors}
                 onClickItem={(author) => onClickAuthor(author)}
               />
               <View>
                 <AnimatedLoader
                   visible={browseContext.state.isLoading}
                   overlayColor="rgba(0,0,0,0.65)"
                   source={require('../../../../assets/common/loader.json')}
                   animationStyle={styles.loading}
                   speed={2}
                 />
               </View>
             </View>
           </ScrollView>
         )
      }
    </ThemeContext.Consumer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',
    padding: Dimension.paddingMedium,
  },
  groupButton: {
    height: Dimension.xheight,
    justifyContent: 'space-around',
    marginBottom: Dimension.marginMedium,
  },
  loading: {
    height: 100,
    width: 100,
  },
});
export default Browse;
