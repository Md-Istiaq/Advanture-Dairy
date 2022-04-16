import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
     <div className='header'>
     <Link to="/home">Home</Link>
     <Link to="/checkout">Check Out</Link>
     <Link to="/blogs">Blogs</Link>
     <Link to="/aboutme">About Me</Link>
     </div>
    );
};

export default Header;