import AsyncStorage from '@react-native-community/async-storage';

export const storeUserInfo = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    const jsonValue = value !== null ? JSON.parse(value) : null;
    console.log(jsonValue);
    return jsonValue;
  } catch (e) {
    console.log(e);
    return null;
  }
};
