import React, { createContext, useState, useContext } from 'react';

const BranchIdContext = createContext();

export const BranchIdProvider = ({ children }) => {
  const [branchId, setBranchId] = useState(null);

  const updateBranchId = (newBranchId) => {
    setBranchId(newBranchId);
  };

  return (
    <BranchIdContext.Provider value={{ branchId, updateBranchId }}>
      {children}
    </BranchIdContext.Provider>
  );
};

export const useBranchId = () => {
  const context = useContext(BranchIdContext);
  if (!context) {
    throw new Error('useBranchId must be used within a BranchIdProvider');
  }
  return context;
};
