import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBarMenu = ({ items }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">My Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map(item => (
              <Nav.Link key={item.id} href={item.href || "#"}>{item.label}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMenu;
