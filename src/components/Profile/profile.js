/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../App';
import {
  Colors, FontSize, Dimension, ScreenKey
} from '../../Constant/Constant';
import { ProfileContext } from '../providers/profile';
import ButtonSolid from '../Common/SolidButton/solid-button';
import { removeUserInfo } from '../../storage/storage';

const Profile = ({
  role, navigation,
}) => {
  const profileContext = useContext(ProfileContext);
  useEffect(() => {
    profileContext.requestProfile();
  }, []);
  const handleLogout = () => {
    removeUserInfo();
    // navigation.replace(ScreenKey.Login);
  };
  return (
    <ThemeContext.Consumer>
      {
            ({ theme }) => (
              <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.imageCricle}
                    source={{ uri: profileContext.state.profile.avatar }}
                  />
                  <Text style={{ ...styles.title, color: theme.textColor }}>{profileContext.state.profile.name}</Text>
                  <Text style={{ ...styles.text, color: theme.textColor }}>{role}</Text>
                </View>
                <View style={styles.extraInfo}>
                  <View style={styles.info}>
                    <Text style={{ ...styles.label, color: theme.textColor }}>Email: </Text>
                    <Text style={{ ...styles.text, color: theme.textColor }}>{profileContext.state.profile.email}</Text>
                  </View>
                  <View style={styles.info}>
                    <Text style={{ ...styles.label, color: theme.textColor }}>Số điện thoại: </Text>
                    <Text style={{ ...styles.text, color: theme.textColor }}>{profileContext.state.profile.phone}</Text>
                  </View>
                </View>
                <View style={styles.solidBtn}>
                  <ButtonSolid
                    title="Log out"
                    backgroundColor={Colors.blue}
                    onChooseOption={() => handleLogout()}
                  />

                </View>
              </View>
            )
            }
    </ThemeContext.Consumer>

  );
};

Profile.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  role: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

Profile.defaultProps = {
  avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
  role: 'STUDENT',
  name: 'Nguyen Thi Thanh Huong',
  email: 'thanhhuong98.fit@gmail.com'
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
    flexDirection: 'column',
    marginLeft: Dimension.marginMedium,
    marginTop: Dimension.marginLarge,
  },
  info: {
    marginLeft: Dimension.marginMedium,
    marginTop: Dimension.marginMedium,
    flexDirection: 'row',
  },
  imageCricle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  title: {
    color: 'white',
    fontSize: FontSize.medium,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: Dimension.marginMedium,
    marginBottom: Dimension.marginXSmall,
  },
  label: {
    color: 'white',
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  solidBtn: {
    marginTop: Dimension.marginLarge,
    padding: Dimension.paddingMedium,
  },

});

export default Profile;
