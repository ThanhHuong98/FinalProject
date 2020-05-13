import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ImageButton from '../../../common/ImageButton/image-button';
import { Colors } from '../../../../Constant/Constant';

// renderItem={({ item }) => (
//     <SectionPathsItem
//       nameCourse={item.nameCourse}
//       srcImage={item.srcImage}
//       numberOfCourse={item.numberOfCourse}
//     />
//   )}

const SectionCategories = ({ data }) => {
  return (
    // <FlatGrid
    //   itemDimension={130}
    //   items={data}
    //   renderItem={({ item }) => (
    //     <ImageButton

    //       />
    //   )}
    <FlatGrid
      style={styles.container}
      itemDimension={130}
      items={data}
      horizontal
      renderItem={({ item }) => (
        <ImageButton
          title={item.title}
          width={200}
          srcImage={item.srcImage}
        />

      )}
    />
   );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },


});

export default SectionCategories;
