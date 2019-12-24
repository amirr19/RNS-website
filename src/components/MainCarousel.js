import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageTemp from '../images/ImageTemp.jpeg';
import ImageTemp2 from '../images/ImageTemp2.jpg';

export default function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
        <div className='carousel'>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageTemp}
            alt="First slide"
          />
          <div className="top-right">
            <h1>RNS</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          
        </Carousel.Item>
         <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageTemp2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        { <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageTemp}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> }
      </Carousel>
      </div>
    );
  }
  
//   render(<ControlledCarousel />);