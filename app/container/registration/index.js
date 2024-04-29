import {Alert} from 'react-native';
import React from 'react';

import RegistrationScreen from '../../screens/registration';
import {useScanContext} from '../../contexts/ScanContext';

import {registerUser} from '../../utils/api';
import {useMutation} from 'react-query';

const Registration = ({navigation}) => {
  const {scannedData} = useScanContext();
  const branchID = scannedData;

  const registrationQueryKey = 'registrationKey';

  const registrationMutation = useMutation(registrationQueryKey, values =>
    registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
      from: 'user',
      role: 'user',
      branchID: branchID,
    }),
  );

  const handleRegister = async (values, actions) => {
    try {
      await registrationMutation.mutateAsync(values);
      Alert.alert('Success', 'User registered successfully!');
      navigation.navigate('Login');
      actions.resetForm();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert('Failed Registration', 'Email already exist.');
      } else {
        Alert.alert('Failed Registration', 'Registration failed.');
      }
    }
  };
  return (
    <RegistrationScreen
      navigation={navigation}
      handleRegister={handleRegister}
    />
  );
};

export default Registration;
