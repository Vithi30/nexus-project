import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-links">
        <Link to="/">Home</Link>
      </div>
      <div className="right-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
