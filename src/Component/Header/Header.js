import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
     <div className='header'>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Adventure dairy</Navbar.Brand>
    <Nav className="me-auto">
     <Link to="/home">Home</Link>
     <Link to="/checkout">Check Out</Link>
     <Link to="/blogs">Blogs</Link>
     <Link to="/aboutme">About Me</Link>
     <Link to="/login">Log In</Link>
    </Nav>
    </Container>
  </Navbar>
     </div>
    );
};

export default Header;