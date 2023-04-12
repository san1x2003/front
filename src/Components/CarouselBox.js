import React  from "react";
import Carousel from 'react-bootstrap/Carousel';
import shop1Img from '../assets/shop1.jpg';
import shop2Img from '../assets/shop2.jpg';


export default function CarouselBox () {

  return (
    <Carousel>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={shop1Img }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'primary'}}> Магазин Sanshop</h3>
          <p>
            Самые низкие цены!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={shop2Img}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3 style={{color: 'primary'}}> Магазин Sanshop</h3>
          <p>
            Самые низкие цены!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

