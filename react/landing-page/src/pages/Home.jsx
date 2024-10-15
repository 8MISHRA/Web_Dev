import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../lib/context/user";
import './Home.css'; // Styling for the home page

export function Home() {
  const user = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    user.logout();
    navigate("/"); // Redirect to login page after logout
  };

  if (!user.current) {
    // If the user is not logged in, redirect to the login page
    navigate("/");
    return null; // Prevent rendering until redirect
  }

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <h2>Idea Tracker</h2>
        </div>
        <nav className="nav-links">
          <span>{user.current.email}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      {/* Footer */}
      <footer className="footer-section">
        <p>© 2024 Coding Contest Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
