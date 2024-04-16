import React from 'react';
import 'react-native-gesture-handler';
import {PaperProvider, ThemeProvider} from 'react-native-paper';

import AppNavigation from './navigators';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from './theme';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
