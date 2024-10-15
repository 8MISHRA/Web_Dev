import React from 'react';
import './Navbar.css'; // External CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
