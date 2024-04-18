import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegistrationScreen from '../screens/register';
import Profile from '../screens/profile';
import Welcome from '../screens/welcome';
import QrScanScreen from '../screens/qrScan';
const Stack = createStackNavigator();

export default function Navigators() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegistrationScreen} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="qr" component={QrScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})