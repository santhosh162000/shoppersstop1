import React from 'react';
import { Carousel } from 'react-bootstrap';

import image18 from './../assets/images/18a.webp';
import image19 from './../assets/images/19.webp';
import image20 from './../assets/images/20.webp';
import image21 from './../assets/images/21.webp';
import image22 from './../assets/images/22.webp';
import image23 from './../assets/images/23.webp';

const CarouselContainer3 = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image18}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image19}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image20}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image21}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image22}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image23}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer3;