import React, { } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  FontSize, Colors
} from '../../../../../Constant/Constant';


const ItemSkill = ({ name, onClickItem }) => (
  <TouchableOpacity
    style={styles.themeItem}
    onPress={() => onClickItem()}
  >
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  themeItem: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 25,
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.small,
    padding: 5,
    textAlign: 'center'
  },
});

export default ItemSkill;
