import React from 'react';
import { useLogoutMutation, useRefreshQuery } from 'redux/authReducer';

const UserMenu = () => {
  const [logOut] = useLogoutMutation();
  const { data } = useRefreshQuery();
  const exit = () => {
    localStorage.removeItem('token');
    logOut();
  };
  return (
    <>
      <p>Hello {data.name}</p>
      <button type="button" onClick={() => exit()}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
