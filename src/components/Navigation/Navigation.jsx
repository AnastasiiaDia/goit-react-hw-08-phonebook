import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRefreshQuery } from 'redux/authReducer';

const Navigation = () => {
  const { isSuccess } = useRefreshQuery();
  return (
    <header>
      <nav>
        {isSuccess ? (
          <>
            <NavLink to="/bookpage">Book contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/">Registration</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
