import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useMutation} from 'react-query';

import LoginScreen from '../../screens/login';
import {loginUser} from '../../utils/api';
import {useUserContext} from '../../contexts/AuthContext';

const Login = ({navigation}) => {
  const {updateUser, updateToken} = useUserContext();

  const loginQueryKey = 'loginKey';
  const loginMutation = useMutation(loginQueryKey, async values => {
    try {
      const userLoginData = await loginUser({
        email: values.email,
        password: values.password,
        from: 'user',
        navigation,
      });

      if (userLoginData) {
        return userLoginData;
      }
    } catch (error) {
      throw error;
    }
  });

  const handleLogin = async (values, actions) => {
    try {
      const userLoginData = await loginMutation.mutateAsync(values);

      if (userLoginData) {
        console.log('User Login Data ================== ', userLoginData);
        updateUser(userLoginData);
        const {token} = userLoginData?.data;
        updateToken(token);
        // Alert.alert('Successful Login', 'Login successful! Welcome back.');
        navigation.navigate('Welcome');
        actions.resetForm();
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Failed Login', 'Sign-in credentials are invalid');
      } else {
        Alert.alert(
          'Error',
          'An unexpected error occurred. Please try again later.',
        );
      }
    }
  };

  return <LoginScreen navigation={navigation} handleLogin={handleLogin} />;
};

export default Login;
