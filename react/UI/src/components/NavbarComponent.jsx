import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "../styles/Navbar.css";

function NavbarComponent({ buttonText, link }) {
  return (
    <Navbar expand="lg" className="bg-black navBar">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button className="rounded-pill bg-white" style={{ width: '150px' }}>
              <Nav.Link href={link} className="text-black" target="_blank" rel="noopener noreferrer">
                {buttonText}
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
