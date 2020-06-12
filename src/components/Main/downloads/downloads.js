import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, FontSize, Dimension } from '../../../Constant/Constant';
import DownloadIcon from '../../../../assets/ic_download.svg';

const Downloads = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <DownloadIcon width={100} height={100} style={{ marginBottom: 10 }}/>
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
  decription: {
    color: Colors.greyWhite,
    fontSize: FontSize.large,
  }
});

export default Downloads;
