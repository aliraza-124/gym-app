import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = user => {
    setUser(user);
  };

  const updateToken = token => {
    setToken(token);
  };

  return (
    <UserContext.Provider value={{user, updateUser, token, updateToken}}>
      {children}
    </UserContext.Provider>
  );
};
