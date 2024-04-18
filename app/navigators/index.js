import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';
import RegistrationScreen from '../screens/registration';
import CompleteProfile from '../screens/completeProfile';
import RegistrationQRCode from '../screens/registration/qrCode';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="RegistrationQRCode" component={RegistrationQRCode} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
