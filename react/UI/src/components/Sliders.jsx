import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sliders.css';
import { Carousel } from 'react-bootstrap';
import slides from '../data/Sliders.json'; // Import the JSON file

function Sliders() {

  return (
    <>
      <div className='carousels'>
        <div className='p-3'>
          <Carousel>
            {slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <div className='sliders'>
                  <Carousel.Caption>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Sliders;
