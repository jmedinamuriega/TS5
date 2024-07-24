import React, { createContext, useState, ReactNode } from 'react';

interface SessionStorageContextProps {
  saveToken: (token: string) => void;
  clearToken: () => void;
  getToken: () => string | null;
}

export const SessionStorageContext = createContext<SessionStorageContextProps | null>(null);

const SessionStorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('authToken'));

  const saveToken = (token: string) => {
    sessionStorage.setItem('authToken', token);
    setToken(token);
  };

  const clearToken = () => {
    sessionStorage.removeItem('authToken');
    setToken(null);
  };

  const getToken = () => {
    return token;
  };

  return (
    <SessionStorageContext.Provider value={{ saveToken, clearToken, getToken }}>
      {children}
    </SessionStorageContext.Provider>
  );
};

export default SessionStorageProvider;
