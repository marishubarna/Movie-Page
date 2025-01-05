import React from "react";
import { Carousel } from "react-bootstrap";
import "./styleCarusel.css";
import { MoviesItems } from "../API-File/MovieList";

const Carusel = () => {
  // Remove prop destructuring since MoviesItems is imported
  return (
    <div className="Display-Center">
      <Carousel style={{ width: "60%" }}>
        <Carousel.Item>
          <div className="imgSize d-flex justify-content-between">
            {MoviesItems.slice(0, 3).map((movie, index) => (
              <div key={index} className="div50">
                <img src={movie.images} height={100} alt={movie.title} />
              </div>
            ))}
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <div className="imgSize d-flex justify-content-between">
            {MoviesItems.slice(3, 6).map((movie, index) => (
              <div key={index} className="div50">
                <img src={movie.images} height={100} alt={movie.title} />
              </div>
            ))}
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgSize d-flex justify-content-between">
            {MoviesItems.slice(6, 9).map((movie, index) => (
              <div key={index} className="div50">
                <img src={movie.images} height={100} alt={movie.title} />
              </div>
            ))}
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusel;
