import React from 'react';
import { useLogoutMutation } from 'redux/authReducer';

const UserMenu = () => {
  const [logOut] = useLogoutMutation();
  return (
    <>
      <p>Hello userName</p>
      <button type="button" onClick={() => logOut()}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
