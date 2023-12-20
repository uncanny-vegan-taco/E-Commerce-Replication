import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carouselimage1 from "./Carouselimage1.png";
import Carouselimage2 from "./Carouselimage2.png";
import Carouselimage3 from "./Carouselimage3.png";
import "./Slideshow.css";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
export default Slideshow;

const shipIcon = <FontAwesomeIcon icon={faArrowsRotate} />;
const boxIcon = <FontAwesomeIcon icon={faBox} />;

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
      <div className="Footer d-flex">
        <div className="footer-block">
          <div>
            <p>Hi</p>
            <a href="#">Sign In</a>
          </div>
        </div>
        <div className="footer-block">
          <div className="d-flex align-items-center">
            <div className="icon">{shipIcon}</div>
            <div>
              <p>Save 35% Today</p>
              <a href="#">Set up Autoship</a>
            </div>
          </div>
        </div>
        <div className="footer-block">
          <div className="d-flex align-items-center">
            <div className="icon">{boxIcon}</div>
            <div>
              <p>Recent Order</p>
              <a href="#">Track Package</a>
            </div>
          </div>
        </div>
        <div className="footer-block">
          <p>Chewy Pharmacy</p>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </Container>
  );
}
