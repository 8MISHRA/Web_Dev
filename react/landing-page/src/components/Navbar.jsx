import React from 'react';
import './Navbar.css'; // External CSS file
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="home">Home</a>
        <a href="features">Features</a>
        <a href="pricing">Pricing</a>
        <a href="testimonials">Testimonials</a>
      </div>
      <Link to="/login">
      <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
