import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='navbar'>
      <a href="/" className='title'>Disruptive Delivery</a>
      <ul>
        <li className='navbar-link'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navbar-link'>
          <Link to='/orders'>Orders</Link>
        </li>
        <li className='navbar-link'>
          <Link to='/contact'>Contact</Link>
        </li>   
      </ul>
      {/*<a href="#home" className='navbar-link'>Home</a>
      <a href="#about" className='navbar-link'>Our Orders</a>
      <a href="#contact" className='navbar-link'>Contact</a>
      */}
    </nav>
  );
}

export default Navbar;