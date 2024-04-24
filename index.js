

import * as React from 'react';
import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import LoginScreen from './app/screens/login/index.js';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import App from './app/App';
import { BranchIdProvider } from './app/context/qrContext/index.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './app/context/userContext.js';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FA2D5E',
    secondary: '#FFDFE7',
    text:' #333333',
    background: '#eef1f2', 
    border: '#D2D4D5', 
    placeholder: '#979797', 
    
  },
};

export default function Main() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <BranchIdProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </BranchIdProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

