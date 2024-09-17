import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import ProfileImage from '../../public/profilephoto.jpg'
import "../styles/Profile.css"

function Profile() {
  return (
    <div>
        <section className="hero">
            <div className="hero-left">
                <img src={ProfileImage} alt="Profile" className="profile-img" />
            </div>
            <div className="hero-right">
                <div className="intro-text">
                    <h2>Hello!</h2>
                <p>
                    I’m an India-based web designer and developer working closely with early-stage startup founders to create beautiful and loveable websites for their business.
                </p>
                <Button className="rounded-pill bg-black">
                    <Nav.Link href="#Contact" className="text-white">Contact</Nav.Link>
                </Button>
                {/* <button className="contact-btn">CONTACT</button> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile
