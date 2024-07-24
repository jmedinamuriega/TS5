import React, { useContext } from 'react';
import { RouteProps, Navigate } from 'react-router-dom';
import { SessionStorageContext } from './SessionStorageManager';

const PrivateRoute: React.FC<{ children: JSX.Element } & RouteProps> = ({ children, ...rest }) => {
  const sessionStorageContext = useContext(SessionStorageContext);
  const token = sessionStorageContext?.getToken();

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
