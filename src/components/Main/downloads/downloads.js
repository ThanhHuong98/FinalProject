import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';

const Downloads = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          style={styles.img}
          source={require('../../../../assets/ic_downloads.png')}
        //  source={require('../../../../assets/bg_home.jpg')}
        />
        <Text style={styles.decription}>
          No downloads
        </Text>
        <Text style={styles.decription}>
          Courses you downloads will appear here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimension.marginLarge,
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: Dimension.marginMedium,
  },
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
    padding: Dimension.paddingMedium,
  }
});

export default Downloads;
