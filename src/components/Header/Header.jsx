import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Ul } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <Ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="*" />
      </Ul>
    </Nav>
  );
};

export default Header;
