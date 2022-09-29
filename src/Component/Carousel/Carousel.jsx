import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouseldata } from "../Dummydata/Carouseldata";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centermode: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {Carouseldata.map((each, index) => (
          <div className="Carousel-container" key={index}>
            <div className="image-description-container">
              <div>
              <figure>
                <img
                  src={each?.image}
                  alt="imageload"
                  className="image-container"
                />
              </figure>
              </div>
              {/* </div> */}
              <div className="carousel-description-container">
                <p>{each?.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
