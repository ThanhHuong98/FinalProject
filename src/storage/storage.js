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

export const removeUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    await AsyncStorage.removeItem(value);
    return true;
  } catch (exception) {
    return false;
  }
};


export const getSearchHistory = async () => {
  try {
    const value = await AsyncStorage.getItem('searchHistory');
    const jsonValue = value !== null ? JSON.parse(value) : null;
    return jsonValue;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const saveSearchHistory = async (listKey) => {
  try {
    const jsonValue = JSON.stringify(listKey);
    await AsyncStorage.setItem('searchHistory', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const clearSearchHistory = async () => {
  try {
    await AsyncStorage.removeItem('searchHistory');
  } catch (e) {
    console.log(e);
  }
};
