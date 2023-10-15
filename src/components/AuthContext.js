import React, { createContext, useContext, useState } from "react";

// create context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// create provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
