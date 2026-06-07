import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const getToken = () => sessionStorage.getItem('token');

const getUser = () => {
  try {
    return JSON.parse(sessionStorage.getItem('user'));
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(getToken());

  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('token', tokenData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);