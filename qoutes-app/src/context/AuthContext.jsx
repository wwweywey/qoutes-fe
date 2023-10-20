import React, { createContext, useContext, useState } from "react";

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You can initialize it with user data if user is authenticated

  // Function to set the user data
  const setUserDetails = (userData) => {
    setUser(userData);
  };

  // Function to clear user data (logout)
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUserDetails, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
