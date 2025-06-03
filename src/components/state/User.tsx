import React from 'react';
type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // const [user, setUser] = React.useState<AuthUser>({} as AuthUser); !Утверждение типа, что пользователь всегдв будет и не будет Тгдд
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: 'Jeki',
      email: 'jeki@u.uu',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button className='btn' onClick={handleLogin}>
        Login
      </button>
      <button className='btn' onClick={handleLogout}>
        Logout
      </button>
      {/* {user !== null && (
        <>
          <div>User name is {user.name}</div>
          <div>User email is {user.email}</div>
        </>
      )} */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
