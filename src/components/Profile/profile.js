/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext, LanguageContext } from '../../../App';
import {
  Colors, FontSize, Dimension, ScreenKey
} from '../../Constant/Constant';
import { ProfileContext } from '../providers/profile';
import OutLineButton from '../Common/OutLineButton/outLine-button';
import { removeUserInfo } from '../../storage/storage';

const Profile = ({
  role, navigation,
}) => {
  const handleLogout = () => {
    removeUserInfo();
    navigation.navigate(ScreenKey.Authen);
  };
  const handleBack = () => {
    navigation.navigate(ScreenKey.Main);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LanguageContext>
          {
            ({ lang }) => (
              <TouchableOpacity onPress={() => handleLogout()}>
                <Text style={{ ...styles.text, color: Colors.blue, marginRight: 10, }}>{lang.Signout}</Text>
              </TouchableOpacity>
            )
          }
        </LanguageContext>
      ),
      headerLeft: () => (
        <LanguageContext>
          {
            ({ lang }) => (
              <TouchableOpacity onPress={() => handleBack()}>
                <Text style={{ ...styles.text, color: Colors.blue, marginLeft: 10, }}>{lang.Back}</Text>
              </TouchableOpacity>
            )
          }
        </LanguageContext>
      ),
    });
  }, [navigation]);

  const profileContext = useContext(ProfileContext);
  useEffect(() => {
    profileContext.requestProfile();
  }, []);
  const handleEdit = () => {
    navigation.navigate(ScreenKey.EditProfile, { data: profileContext.state.profile });
  };
  return (
    <LanguageContext.Consumer>
      {
        ({ lang }) => (
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
                        <Text style={{ ...styles.label, color: theme.textColor }}>
                          {lang.Email}
                          {':'}
                          {'  '}
                        </Text>
                        <Text style={{ ...styles.text, color: theme.textColor }}>{profileContext.state.profile.email}</Text>
                      </View>
                      <View style={styles.info}>
                        <Text style={{ ...styles.label, color: theme.textColor }}>
                          {lang.Phone}
                          {' '}
                          {':'}
                          {'  '}
                        </Text>
                        <Text style={{ ...styles.text, color: theme.textColor }}>{profileContext.state.profile.phone}</Text>
                      </View>
                      <View style={styles.info}>
                        <Text style={{ ...styles.label, color: theme.textColor }}>Ngày tham gia:   </Text>
                        <Text style={{ ...styles.text, color: theme.textColor }}>26/5/2020</Text>
                      </View>
                    </View>
                    <View style={styles.solidBtn}>
                      <OutLineButton
                        title={lang.UpdateInfo}
                        backgroundColor={Colors.blue}
                        onChooseOption={() => handleEdit()}
                      />

                    </View>
                  </View>
                )
                }
          </ThemeContext.Consumer>

        )
      }
    </LanguageContext.Consumer>
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
    marginTop: Dimension.marginMedium,
  },
  info: {
    marginLeft: Dimension.marginMedium,
    marginTop: 18,
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
    marginTop: Dimension.marginMedium,
    padding: Dimension.marginMedium,
  },

});

export default Profile;
