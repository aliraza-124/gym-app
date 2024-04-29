import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../container/login';
import Registration from '../container/registration';
// import CompleteProfile from '../container/completeProfile';

import RegistrationQRCode from '../screens/registration/qrCode';
import WelcomeScreen from '../screens/welcome';
import AppBottomTabs from './bottomTabs';
import CompleteProfile from '../container/completeProfile';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          name="RegistrationQRCode"
          component={RegistrationQRCode}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
        <Stack.Screen name="AppBottomTabs" component={AppBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
