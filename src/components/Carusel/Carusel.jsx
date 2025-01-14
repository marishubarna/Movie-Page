import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styleCarusel.css";

const Carusel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const getMoviesCarousel = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesCarousel();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Display-Center">
      <Carousel className="CaruselWidth" style={{ width: "95%" }}>
        {movies &&
          movies.map((movie, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} // Зміна розміру на "original"
                alt={movie.title}
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Carusel;
