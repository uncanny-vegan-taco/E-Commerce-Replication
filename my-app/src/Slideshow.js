import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carouselimage1 from "./Carouselimage1.png";
import Carouselimage2 from "./Carouselimage2.png";
import Carouselimage3 from "./Carouselimage3.png";
import "./Slideshow.css";
import Container from "react-bootstrap/esm/Container";
export default Slideshow;

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container id="Container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <a href="#">
            <img src={Carouselimage1} className="Slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <img src={Carouselimage2} className="Slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <img src={Carouselimage3} className="Slide" />
          </a>
        </Carousel.Item>
      </Carousel>
      <div className="Footer">
        <div className="footer-block">
          <p>Hi</p>
          <a href="#">Sign In</a>
        </div>
        <div className="footer-block">
          <p>Save 35% Today</p>
          <a href="#">Set up Autoship</a>
        </div>
        <div className="footer-block">
          <p>Recent Order</p>
          <a href="#">Track Package</a>
        </div>
        <div className="footer-block">
          <p>Chewy Pharmacy</p>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </Container>
  );
}
