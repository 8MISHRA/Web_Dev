import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Navbar.css";
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-black fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Divyansh Mishra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button className="rounded-pill bg-white">
                <Nav.Link href="#Contact" className="text-black">Contact</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;