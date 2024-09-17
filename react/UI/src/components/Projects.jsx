import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Data Science Job Portal',
    description: 'A portal designed for freshers looking for jobs in data science.',
    link: '#'
  },
  {
    title: 'Simple Calculator',
    description: 'A calculator app built with React.',
    link: '#'
  },
  {
    title: 'AI Webinars Club',
    description: 'A club for students to learn AI-based APIs and projects.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
