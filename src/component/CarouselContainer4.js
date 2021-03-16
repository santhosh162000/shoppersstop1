import React from 'react';
import { Carousel } from 'react-bootstrap';

import image25 from './../assets/images/25.jpg';
import image26 from './../assets/images/26.webp';
import image27 from './../assets/images/27.jpg';

const CarouselContainer4 = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image25}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image26}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image27}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer4;