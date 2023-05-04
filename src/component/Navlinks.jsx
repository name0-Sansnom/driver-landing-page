import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../bolt.svg';

const Navlinks = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Driver landing page logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Ride</Nav.Link>
            <Nav.Link href="/BecomeADriver">Become a driver</Nav.Link>
            <Nav.Link href="/Fleet">Fleet</Nav.Link>
            <Nav.Link href="/Business">Business</Nav.Link>
            <Nav.Link href="/Scooters">Scooters</Nav.Link>
            <Nav.Link href="/Drive">Drive</Nav.Link>
            <Nav.Link href="/Food">Food</Nav.Link>
            <Nav.Link href="/Cities">cities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="secondary" as="a" href="/login">Login</Button>
      </Container>
    </Navbar>
  );
}

export default Navlinks;
