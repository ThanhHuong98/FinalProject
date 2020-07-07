/* eslint-disable import/no-cycle */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, FontSize } from '../../../Constant/Constant';
// import DownloadIcon from '../../../../assets/ic_download.svg';
import { ThemeContext } from '../../../../App';

const Downloads = () => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <View style={{ ...styles.container, backgroundColor: theme.background }}>
          <View style={styles.center}>
            {/* <DownloadIcon width={100} height={100} style={{ marginBottom: 10 }}/> */}
            <Text style={{ ...styles.decription, color: theme.textColor }}>
              No downloads
            </Text>
            <Text style={styles.decription}>
              Courses you downloads will appear here
            </Text>
          </View>
        </View>
      )
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
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
