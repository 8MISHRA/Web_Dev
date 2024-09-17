import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Card.css';

function ProjectStack() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', imgSrc: 'project.jpeg' },
    { title: 'Project 2', description: 'Description of project 2', imgSrc: 'project.jpeg' },
    { title: 'Project 3', description: 'Description of project 3', imgSrc: 'project.jpeg' },
    { title: 'Project 4', description: 'Description of project 4', imgSrc: 'project.jpeg' },
  ];

  return (
    <div className="project-stack-container bg-black">
      {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIdx) => (
        <Row key={rowIdx} className={`project-row ${rowIdx % 2 === 0 ? 'left' : 'right'}`}>
          {projects.slice(rowIdx * 2, rowIdx * 2 + 2).map((project, colIdx) => (
            <Col key={colIdx} xs={12} md={6} className={`project-col ${colIdx % 2 === 0 ? 'align-left' : 'align-right'}`}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default ProjectStack;
