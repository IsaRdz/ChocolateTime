import React from "react";
import style from "./Carousel.module.css";

let { greetingTitle } = style;

const Carousel = ({ greeting }) => {
  return (
    <div
      id="carouselExampleAutoplaying "
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/dhpyauyit/image/upload/v1682375384/E-commerce%20ChocoLove/carousel1_hajzl0.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className={greetingTitle}>{greeting}</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dhpyauyit/image/upload/v1682375380/E-commerce%20ChocoLove/carousel2_vhhsxc.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className={greetingTitle}>{greeting}</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dhpyauyit/image/upload/v1682375383/E-commerce%20ChocoLove/carousel3_omrs40.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className={greetingTitle}>{greeting}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
