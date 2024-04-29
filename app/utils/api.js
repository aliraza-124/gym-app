import axios from 'axios';
import {Alert} from 'react-native';

export const registerUser = async ({
  name,
  email,
  password,
  from,
  role,
  branchId,
}) => {
  const response = await axios.post(
    'https://api.dev.inzer.com.au/user/signup',
    {
      name,
      email,
      password,
      from,
      role,
      branchId,
    },
  );

  return response.data;
};

export const loginUser = async ({email, password, from, navigation}) => {
  try {
    const response = await axios.post(
      'https://api.dev.inzer.com.au/user/login',
      {
        email,
        password,
        from,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response.data.statusCode === 401) {
      Alert.alert('Failed Login', 'Sign-in credentials are invalid');
    }
  }
};

export const completeProfile = async token => {
  // const {token} = useUserContext();

  try {
    const response = await axios.get('https://api.dev.inzer.com.au/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    Alert.alert('Error', 'Failed to fetch data');
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      'https://api.dev.inzer.com.au/user/logout',
    );
    return response.data;
  } catch (error) {
    if (error.response.data.statusCode === 401) {
      Alert.alert('Failed Logout', 'Sign-in credentials are invalid');
    }
  }
};
