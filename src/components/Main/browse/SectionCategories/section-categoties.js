import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ImageButton from '../../../common/ImageButton/image-button';
import { Dimension } from '../../../../Constant/Constant';

const SectionCategories = ({ title, data }) => {
  const separator = () => {
    return (
      <View
        style={{ marginRight: Dimension.paddingMedium }}
    />
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <ImageButton
          title={item.title}
          width={200}
          srcImage={item.srcImage}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={separator}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15, marginBottom: 20
  },


});

export default SectionCategories;
