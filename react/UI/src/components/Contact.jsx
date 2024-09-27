import React from 'react';
import NavbarComponent from './NavbarComponent';
import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <>
    <NavbarComponent buttonText="Home" link="https://github.com/8mishra"/>
    <div className="contact-container">
      <div className="left-section">
        <h1>
          Want to <br /> start <br /> a new <br /> project?
        </h1>
        <p className="subtext">Or just say hello.</p>
      </div>
      <div className="right-section">
        <p className="email">info@chiaraluzzana.com</p>
        <div className="social-icons">
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a>
        </div>
        <div className="newsletter">
          <p>Newsletter</p>
          <input type="email" placeholder="Email Address" />
          <button>&#10132;</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
