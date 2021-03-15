import React from 'react';
import { Carousel } from 'react-bootstrap';

import image12 from './../assets/images/12.webp';
import image13 from './../assets/images/13.webp';
import image14 from './../assets/images/14.webp';
import image15 from './../assets/images/15.webp';
import image16 from './../assets/images/16.webp';
import image17 from './../assets/images/17.webp';

const CarouselContainer2 = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image12}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image13}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image14}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image15}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image16}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image17}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer2;