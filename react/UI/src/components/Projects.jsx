import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Projects() {
  return (
    <div className='ImagesCard'>
    <h1 className="cardText">My <br></br>Projects</h1>
    <CardGroup className="custom-card-group">
      <Card className="custom-card">
        <Card.Img variant="top" src="project.jpeg" />
        <Card.Body>
          <Card.Title>First WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="project.jpeg" />
        <Card.Body>
          <Card.Title>Second WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="project.jpeg" />
        <Card.Body>
          <Card.Title>Third WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="project.jpeg" />
        <Card.Body>
          <Card.Title>Fourth WEBSITE</Card.Title>
        </Card.Body>

      </Card>
    </CardGroup>
    </div>
  );
}

export default Projects;
