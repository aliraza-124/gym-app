import React from 'react';
import {ScanProvider} from './ScanContext';
import {AuthProvider} from './AuthContext';

const AppProvider = ({children}) => {
  return (
    <ScanProvider>
      <AuthProvider>{children}</AuthProvider>
    </ScanProvider>
  );
};

export default AppProvider;
