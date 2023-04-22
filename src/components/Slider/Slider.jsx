import React from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";



function Carousel() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    }


  return (
    <div className="slider">
      <Slider {...settings}>
          <div className="card">
              <img src="cards/card1.png" alt="pic"/>
          </div>
          <div className="card">
              <img src="cards/card2.png" alt="pic"/>
          </div>
          <div className="card">
              <img src="cards/card3.png" alt="pic"/>
          </div>
          <div className="card">
              <img src="cards/card1.png" alt="pic"/>
          </div>


      </Slider>
    </div>
  );
}

export default Carousel;