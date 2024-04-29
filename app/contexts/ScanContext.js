import React, { createContext, useState, useContext } from 'react';

const ScanContext = createContext();
export const useScanContext = () => useContext(ScanContext);

export const ScanProvider = ({ children }) => {
  const [scannedData, setScannedData] = useState(null);

  const updateScannedData = (data) => {
    setScannedData(data);
  };

  return (
    <ScanContext.Provider value={{ scannedData, updateScannedData }}>
      {children}
    </ScanContext.Provider>
  );
};
