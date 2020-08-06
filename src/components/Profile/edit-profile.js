/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  alert,
} from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import AnimatedLoader from 'react-native-animated-loader';
import { ThemeContext } from '../../../App';
import {
  Colors, FontSize, Dimension, ScreenKey
} from '../../Constant/Constant';
import { ProfileContext } from '../providers/profile';
import Separator from '../Common/Separator/separator-bottom';
import { isCheckAviablePhone } from '../../core/services/checkAuthen';

const EditProfile = ({
  route, navigation
}) => {
  const profileContext = useContext(ProfileContext);
  const userInfo = route.params.data;
  // if (userInfo) profileContext.cancelUpdate();
  const [editInfo, setEditInfo] = useState({
    name: userInfo.name,
    phone: userInfo.phone,
    selectedImage: userInfo.avatar,
  });
  const [error, setError] = useState('');
  const handleInputName = (name) => {
    setEditInfo({
      ...editInfo,
      name,
    });
  };
  const handleInputPhone = (phone) => {
    if (!isCheckAviablePhone(phone)) {
      setError('Số điện thoại không hợp lệ, vui lòng nhập lại!');
    } else {
      setEditInfo({
        ...editInfo,
        phone,
      });
      setError('');
    }
  };

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setEditInfo({
      ...editInfo,
      selectedImage: pickerResult.uri,
    });
    const filename = pickerResult.uri.split('/').pop();
    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image';

    const avatarFile = {
      uri: pickerResult.uri,
      name: filename,
      type,
    };
    profileContext.uploadAvatar(avatarFile);
  };
  const onBack = () => {
    navigation.pop();
    navigation.replace(ScreenKey.Profile);
    profileContext.cancelUpdate();
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onSave()}>
          <Text style={{ ...styles.text, color: Colors.blue, marginRight: 10, }}>Lưu thay đổi</Text>
        </TouchableOpacity>
      ),
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => onBack()}>
      //     <Image
      //       style={styles.iconHeader}
      //       source={require('../../../assets/authen/back.png')}
      //     />

      //   </TouchableOpacity>
      // )
    });
  }, [editInfo]);
  useEffect(() => {
    if (profileContext.state.uploadStatus === 1) {
      navigation.pop();
      navigation.replace(ScreenKey.Profile);
      profileContext.cancelUpdate();
    }
  }, [profileContext.state.uploadStatus === 1]);

  const onSave = () => {
    profileContext.updateProfile(editInfo.name, editInfo.phone);
  };
  const onChnageAvatar = async () => {
    openImagePickerAsync();
  };
  return (
    <ThemeContext.Consumer>
      {
            ({ theme }) => (
              <View style={{ ...styles.container, backgroundColor: theme.background }}>
                {
                    profileContext.state.urlAvatar === 'FAILED'
                      ? (
                        <Text style={{ ...styles.textEror, marginLeft: 20, marginTop: 15 }}>
                          Đã có lỗi xảy ra khi tải lên hình ảnh, vui lòng kiểm tra lại!
                        </Text>
                      )
                      : (
                        profileContext.state.urlAvatar !== ''
                          ? (
                            <Text style={{ ...styles.textSuccess, marginLeft: 20, marginTop: 15 }}>
                              Tải lên hình ảnh thành công!
                            </Text>
                          )
                          : null
                      )
                  }
                <TouchableOpacity style={styles.avatarContainer} onPress={() => onChnageAvatar()}>
                  <Image
                    style={styles.imageCricle}
                    source={{ uri: editInfo.selectedImage !== null ? editInfo.selectedImage : userInfo.avatar }}
                  />
                  <Text style={styles.textAction}>Chỉnh sửa hình ảnh</Text>
                </TouchableOpacity>
                <Separator />
                <View style={styles.extraInfo}>
                  <Text style={{ ...styles.label, color: theme.textColor }}>Tên</Text>
                  <TextInput
                    style={{ ...styles.input, color: theme.textColor }}
                    onChangeText={(name) => handleInputName(name)}
                    defaultValue={editInfo.name}
                  />
                </View>
                <Separator />
                <View style={styles.extraInfo}>
                  <Text style={{ ...styles.label, color: theme.textColor }}>Số điện thoại</Text>
                  <TextInput
                    style={{ ...styles.input, color: theme.textColor }}
                    onChangeText={(phone) => handleInputPhone(phone)}
                    defaultValue={editInfo.phone}
                    keyboardType="numeric"
                  />
                  {
                    error
                      ? (
                        <Text style={styles.textEror}>
                          {error}
                        </Text>
                      )
                      : null
                  }
                </View>
                <Separator />
                <AnimatedLoader
                  visible={profileContext.state.isLoading}
                  overlayColor="rgba(255,255,255,0.75)"
                  source={require('../../../assets/common/loader.json')}
                  animationStyle={styles.lottie}
                  speed={2}
                />
              </View>
            )
            }
    </ThemeContext.Consumer>

  );
};

EditProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

EditProfile.defaultProps = {
  avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
  name: 'Nguyen Thi Thanh Huong',
  phone: '11122233345',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
    flex: 1,
  },
  avatarContainer: {
    flexDirection: 'row',
    padding: Dimension.marginMedium,
    alignItems: 'center',
    width: 260,
    justifyContent: 'space-around'
  },
  extraInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: Dimension.marginMedium,
    paddingLeft: Dimension.marginMedium,
  },
  input: {
    height: 40,
  },
  label: {
    color: 'white',
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  imageCricle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  textAction: {
    color: Colors.blue,
    fontSize: FontSize.medium,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: FontSize.medium,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: Dimension.marginMedium,
    marginBottom: Dimension.marginXSmall,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  solidBtn: {
    marginTop: Dimension.marginMedium,
    padding: Dimension.marginMedium,
  },
  textEror: {
    color: 'red',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 13,
  },
  textSuccess: {
    color: 'green',
    fontSize: FontSize.xsmall,
    textAlign: 'left',
    marginBottom: 13,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  iconHeader: {
    height: 30,
    width: 30,
    marginLeft: 10,
  }
});

export default EditProfile;
