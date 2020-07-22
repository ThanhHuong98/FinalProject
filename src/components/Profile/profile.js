import React, { } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { ThemeContext } from '../../../App';
import PropTypes from 'prop-types';
import { Colors, FontSize, Dimension } from '../../Constant/Constant';
import { RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED } from 'expo-av/build/Audio';
const Profile = ({name, avatar}) => {
    return (
        <ThemeContext.Consumer>
          {
            ({ theme }) => {
              console.log("Test Theme on Setting Screen: ", theme.background);
              return (
                <View style={{ ...styles.container, backgroundColor: theme.background }}>
                    <View style={styles.avatarContainer}>
                    <Image
                    style={styles.imageCricle}
                    source={{ uri: avatar }}
                    />
                    <Text style={{ ...styles.title, color: theme.textColor }}>{name}</Text>
                    </View>
                    <View style={styles.extraInfo}>
                    <Text style={{ ...styles.title, color: theme.textColor }}>{name}</Text>
                    </View>
                </View>
              );
            }
            }
        </ThemeContext.Consumer>
      );
}

Profile.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
  };
  
  Profile.defaultProps = {
    avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
    name: 'Nguyen Thi Thanh Huong',
  };
  
const styles = StyleSheet.create({
container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
    flex: 1,
  },
  avatarContainer: {
    flexDirection: 'column',
    marginTop: Dimension.marginLarge,
    alignItems: 'center',
},
    extraInfo: {
        alignSelf: 'flex-start',
    },
  imageCricle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.xsmall,
    marginTop: Dimension.marginXSmall,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    padding: 10,
  },

});

export default Profile;
