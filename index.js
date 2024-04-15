// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './app/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './app/App.tsx';
import LoginScreen from './app/screens/login/index.js';

export default function Main() {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
