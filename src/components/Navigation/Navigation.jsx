import { Header, Nav } from 'components/Form/FormElements.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRefreshQuery } from 'redux/authReducer';

const Navigation = () => {
  const { isSuccess } = useRefreshQuery();
  return (
    <Header>
      <Nav>
        {isSuccess ? (
          <>
            <NavLink to="/bookpage">Book page</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/">Registration</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </Nav>
    </Header>
  );
};

export default Navigation;
