import React from 'react';
import { Carousel } from 'react-bootstrap';

import image10 from './../assets/images/10.webp';
import image11 from './../assets/images/11.webp';

const CarouselContainer1 = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image10}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image11}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer1;