import React from 'react';
import { Nav, NavHeader, Ul } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <Ul>
        <NavHeader to="/">Home</NavHeader>
        <NavHeader to="/movies">Movies</NavHeader>
        <NavHeader to="*" />
      </Ul>
    </Nav>
  );
};

export default Header;
