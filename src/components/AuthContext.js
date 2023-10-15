import React, { createContext, useContext, useState } from "react";

// create context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// create provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") || false
  );

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    // local Storage
    localStorage.setItem("isAuthenticated", JSON.stringify(!isAuthenticated));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
