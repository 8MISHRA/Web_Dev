{/* <Image src={`profilephoto.jpg`} roundedCircle /> */}
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "../styles/Profile.css"

const Profile = () => {
  const LeftComponent = () => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Image src={`profilephoto.jpg`} roundedCircle fluid/>
      </div>
    );
  };

  const RightComponent = () => {
    return (
      <div>
        <h3>My Profile</h3>
        <p>
          Hi, I am Divyansh. I am passionate about AI, React development, and building software solutions.
          Currently, I'm working on creating web portals and AI-powered solutions for various use cases.
        </p>
          <div className="d-flex justify-content-center">
            <Button className="rounded-pill bg-black" style={{ width: '150px' }}>
              <Nav.Link href="https://www.linkedin.com/in/divyansh-mishra-114955253/" className="text-white" target="_blank" rel="noopener noreferrer">Contact</Nav.Link>
            </Button>
          </div>
      </div>
    );
  };

  return (
    <div className="my-5">
      <Row>
        <Col md={6}>
          <LeftComponent />
        </Col>
        <Col md={6} className="md-10 d-flex align-items-center justify-content-center profile_div">
          <RightComponent />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
