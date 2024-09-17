import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function UncontrolledExample() {

  return (
    <>
    <div className='carousels'>
      <div className='p-3'>
        <Carousel>
          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif"
              }}
            >
              <Carousel.Caption style={{color: "black"}}>
                <h3>First Slider Text Title</h3>
                <p>First Slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif"
              }}
            >
              <Carousel.Caption style={{color: "black"}}>
                <h3>Second Slider Text Title</h3>
                <p>Second slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif",
              }}
            >
              <Carousel.Caption style={{color: "black"}}>
                <h3>Third Slider Text Title</h3>
                <p>Third slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
    </>
  );
}

export default UncontrolledExample;
