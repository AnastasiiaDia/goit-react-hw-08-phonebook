import { ButtonLogout, SpanHello } from 'components/Form/FormElements.styled';
import React from 'react';
import {
  deleteTokenFromHeader,
  useLogoutMutation,
  useRefreshQuery,
} from 'redux/authReducer';

const UserMenu = () => {
  const [logOut] = useLogoutMutation();
  const { data } = useRefreshQuery();
  const exit = () => {
    logOut();
    localStorage.removeItem('token');
    deleteTokenFromHeader();
  };
  return (
    <SpanHello>
      <span>Hello {data.name}</span>
      <ButtonLogout type="button" onClick={() => exit()}>
        Logout
      </ButtonLogout>
    </SpanHello>
  );
};

export default UserMenu;
