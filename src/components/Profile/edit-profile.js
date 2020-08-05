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
import { ThemeContext } from '../../../App';
import {
  Colors, FontSize, Dimension, ScreenKey
} from '../../Constant/Constant';
import { ProfileContext } from '../providers/profile';
import Separator from '../Common/Separator/separator-bottom';

const EditProfile = ({
  route, navigation
}) => {
  const userInfo = route.params.data;
  const [nameUser, setnameUser] = useState(userInfo.name);
  const [phoneUser, setPhoneUser] = useState(userInfo.phone);
  const [selectedImage, setSelectedImage] = React.useState(null);

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
    setSelectedImage({ localUri: pickerResult.uri });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onSave()}>
          <Text style={{ ...styles.text, color: Colors.blue, marginRight: 10, }}>Lưu thay đổi</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const profileContext = useContext(ProfileContext);
  const onSave = () => {
    profileContext.updateInfor(nameUser, phoneUser, selectedImage);
  };
  const onChnageAvatar = async () => {
    openImagePickerAsync();
  };
  return (
    <ThemeContext.Consumer>
      {
            ({ theme }) => (
              <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <TouchableOpacity style={styles.avatarContainer} onPress={() => onChnageAvatar()}>
                  <Image
                    style={styles.imageCricle}
                    source={{ uri: selectedImage !== null ? selectedImage.localUri : userInfo.avatar }}
                  />
                  <Text style={styles.textAction}>Chỉnh sửa hình ảnh</Text>
                </TouchableOpacity>
                <Separator />
                <View style={styles.extraInfo}>
                  <Text style={{ ...styles.label, color: theme.textColor }}>Tên</Text>
                  <TextInput
                    style={{ ...styles.input, color: theme.textColor }}
                    placeholder=""
                    onChangeText={(text) => setnameUser(text)}
                    defaultValue={userInfo.name}
                  />
                </View>
                <Separator />
                <View style={styles.extraInfo}>
                  <Text style={{ ...styles.label, color: theme.textColor }}>Số điện thoại</Text>
                  <TextInput
                    style={{ ...styles.input, color: theme.textColor }}
                    placeholder=""
                    onChangeText={(text) => setPhoneUser(text)}
                    defaultValue={userInfo.phone}
                  />
                </View>
                <Separator />
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

});

export default EditProfile;
