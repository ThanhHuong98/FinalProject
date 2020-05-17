import React, {} from 'react'
import { View, UIManager, findNodeHandle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const ICON_SIZE = 24
// refs: https://cmichel.io/how-to-create-a-more-popup-menu-in-react-native

const PopupMenu = ({ actions, onPress }) => {

    return (
        <View>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name='more-vert'
            size={ICON_SIZE}
            color={'grey'}
            // ref={this.onRef}
             />
        </TouchableOpacity>
      </View>
    );
};

export default PopupMenu;