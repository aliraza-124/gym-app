import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
