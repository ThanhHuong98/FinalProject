import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSize } from '../../../Constant/Constant';

const Panel = ({ content }) => {
  const MIN_HEIGHT = 70;
  const MAX_HEIGHT = 200;
  const [isExpanded, setExpaned] = useState(true);
  const [mHeight, setHeight] = useState(MIN_HEIGHT);

  let iconName = 'ios-arrow-up';
  if (isExpanded) {
    iconName = 'ios-arrow-down';
  }
  const onChangeExpand = () => {
    if (isExpanded) {
      setExpaned(false);
      setHeight(MAX_HEIGHT);
    } else {
      setExpaned(true);
      setHeight(MIN_HEIGHT);
    }
};
  return (

    <View style={{ ...styles.container, height: mHeight }}>
      <Text style={styles.content}>
        {content}
      </Text>
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.action}
        onPress={onChangeExpand}
      >
        <Ionicons
          name={iconName}
          size={16}
          color={Colors.white}
      />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    width: '85%',
    color: Colors.greyWhite,
    fontSize: FontSize.xxsmall,
    textAlign: 'left',
  },
  separator: {
    width: '7%',
  },
  action: {
    width: '8%',
    backgroundColor: Colors.secondaryColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Panel;
