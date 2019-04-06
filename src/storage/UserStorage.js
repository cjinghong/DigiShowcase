import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'USER';

const fetchUser = async () => {
  let user = null;
  // READ USER
  try {
    const userJson = await AsyncStorage.getItem(STORAGE_KEY);
    if (userJson !== null) {
      user = JSON.parse(userJson);
    } else {
      console.log('NO USER...');
    }
  } catch (error) {
    console.log(error);
  }
  return user;
};

const saveUser = (user) => {
  console.log('save', user);
  // Save user to storage
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

const deleteUser = () => {
  // Delete user from storage
  AsyncStorage.removeItem(STORAGE_KEY);
};

export { fetchUser, saveUser, deleteUser };
