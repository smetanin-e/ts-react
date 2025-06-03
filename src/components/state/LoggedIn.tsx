import React from 'react';
const LoggedIn: React.FC = () => {
  const [isLogged, setIslogged] = React.useState<boolean>(false);
  const handleLogin = () => {
    setIslogged(true);
  };
  const handleLogout = () => {
    setIslogged(false);
  };
  return (
    <div>
      <button className='btn' onClick={handleLogin}>
        Login
      </button>
      <button className='btn' onClick={handleLogout}>
        Logout
      </button>
      <div>User is{isLogged ? ` logged in` : ` logged out`}</div>
    </div>
  );
};

export default LoggedIn;
