import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        isLoggedIn,
        setIsLoggedIn,
        profileCompleted,
        setProfileCompleted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}