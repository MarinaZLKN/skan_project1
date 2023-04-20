import React from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

function Carousel() {

    const cards = [
        './cards/card1.png',
        './cards/card2.png',
        './cards/card3.png',
        './cards/card1.png',
    ]
  const renderSlides = () =>
    cards.map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="slider">
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}

export default Carousel;