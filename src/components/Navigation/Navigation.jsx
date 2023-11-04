import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Registration</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Book contacts</NavLink>
        <UserMenu />
      </nav>
    </header>
  );
};

export default Navigation;
