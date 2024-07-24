import React, { useContext } from 'react';
import { SessionStorageContext } from './SessionStorageManager';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const sessionStorageContext = useContext(SessionStorageContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (sessionStorageContext) {
      sessionStorageContext.clearToken();
      navigate('/login');
    }
  };

  const token = sessionStorageContext?.getToken();

  return (
    <div>
      <h1>Home Page</h1>
      {token ? (
        <div>
          <p>Welcome back!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
};

export default Home;
