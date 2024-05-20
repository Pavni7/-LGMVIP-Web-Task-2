// Navbar.js
import React from 'react';
import styled from 'styled-components';

// Styled-components for Navbar
const Nav = styled.nav`
  background: #333;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5em;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: #0056b3;
  }
`;

const Navbar = ({ onGetUsers }) => {
  return (
    <Nav>
      <Brand>Brand Name</Brand>
      <Button onClick={onGetUsers}>Get Users</Button>
    </Nav>
  );
};

export default Navbar;
