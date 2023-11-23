import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../your-path'; // Replace with the actual path to your logo

const NavigationBar = () => {
  return (
    <Navbar bg="yourNavbarBackgroundColor" variant="light">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
          {' The_Pass_Man'}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/password-generator">
            <Nav.Link>Generate Password</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/password-manager">
            <Nav.Link>Password Manager</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
