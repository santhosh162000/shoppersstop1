import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselContainer5.css";
import image40 from './../assets/images/40.jpg';
import image41 from './../assets/images/41.jpg';

const CarouselContainer5 = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block-w-100"
          src={image40}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block-w-100"
          src={image41}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer5;