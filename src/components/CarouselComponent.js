import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section>
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/media/product_Pleiades%20Satellite%20Imagery/file_e9216b195ae740e28bb23a0bb5915843.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>
            Welcome to <span>GeoCircle</span>
          </h1>
          <p>
            GeoCircle is Spatial data and Geo-Artificial Intelligence Services
            provider with many experiences and leader of the technology. Our
            goal is to provide tangible improvements and solutions for actual
            problems in agriculture and environment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/static/images/SPOT_TIJ.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Satellite Imagery</h1>
          <p>
            Life on Earth is constantly changing. The ability to see and track
            these changes is key to understanding, predicting and responding to
            events around us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geo-circle.sgp1.cdn.digitaloceanspaces.com/geo-circle/static/images/SPOT_TB.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Geo-Artificial Intelligence</h1>
          <p>
            Smart Farming ensures a profitable and sustainable future for
            agriculture. GeoCircle is the practical answer to real-world
            challenges, combining innovative deep learning technologies with
            drones and satellite imagery
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

  );
}

export default CarouselComponent;
