import React from 'react';
import 'react-native-gesture-handler';
import {PaperProvider, ThemeProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppProvider from './contexts/AppContext';
import {QueryClient, QueryClientProvider} from 'react-query';

import AppNavigation from './navigators';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeProvider theme={theme}>
            <PaperProvider>
              <AppNavigation />
            </PaperProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
