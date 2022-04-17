import { getAuth ,signOut} from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../_firebase.init';
import './Header.css'
const Header = () => {

  const auth = getAuth(app)

  const [user] = useAuthState(auth)
  const logout = () =>{
      signOut(auth)
  }
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
     {
       user?
       <button className='button' onClick={logout}>Log Out</button>
       :
       <Link to="/login">Log In</Link>
     }
    </Nav>
    </Container>
  </Navbar>
     </div>
    );
};

export default Header;