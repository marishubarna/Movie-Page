import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./styleCarusel.css";

const Carusel = () => {
  const [moviesget, setMoviesget] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erros, setErros] = useState(null);

  const getMoviesCarousel = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjZDAyY2E5NzJlOTFkYTQ5YWE1YzBmYzc1YzE5ZiIsIm5iZiI6MTczNjQ0ODk3OS4zMDA5OTk5LCJzdWIiOiI2NzgwMWJkMzYwMWFjZmU3YmQ0ZWExY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HGORtpmEehpt_P0QpewtFn3oMBrJYsaHL2SboaLbhys",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load movies");
        }
        return res.json();
      })
      .then((data) => {
        setMoviesget(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErros(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMoviesCarousel();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (erros) {
    return <div>Error: {erros}</div>;
  }

  return (
    <div className="Display-Center">
      <Carousel className="CaruselWidth" style={{ width: "300px" }}>
        <Carousel.Item>
          <div className="imgSize d-flex justify-content-around">
            {moviesget.slice(0, 3).map((movie, index) => (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  height={"200px"}
                  style={{ margin: "0px" }}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="imgSize d-flex justify-content-around">
            {moviesget.slice(3, 6).map((movie, index) => (
              <div key={index} className="div20">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  height={"200px"}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="imgSize d-flex justify-content-around">
            {moviesget.slice(6, 9).map((movie, index) => (
              <div key={index} className="div20">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  height={"200px"}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusel;
