import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Ratting/Ratting";
import FirstMenu from "./../FirstMenu";
import "./MovieCardSelect.css"; // Додайте ваші стилі тут

const MovieCardSelect = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [Themes, setTheme] = useState(false);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjZDAyY2E5NzJlOTFkYTQ5YWE1YzBmYzc1YzE5ZiIsIm5iZiI6MTczNjQ0ODk3OS4zMDA5OTk5LCJzdWIiOiI2NzgwMWJkMzYwMWFjZmU3YmQ0ZWExY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HGORtpmEehpt_P0QpewtFn3oMBrJYsaHL2SboaLbhys",
          },
        }
      );
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie selected</div>;
  }

  return (
    <div
      style={{
        backgroundColor: Themes ? "white" : "black",
        color: Themes ? "black" : "white",
      }}
      className="movie-grid"
    >
      <FirstMenu setThemes={setTheme} />
      <div className="backgroundDisplay">
        <div className="displayCenter" key={movie.id}>
          <img
            className="posterHeight"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            height={"100%"}
          />
          <div className="textDisplay">
            <h1 className="Header">{movie.title}</h1>
            <h5 className="Date">{movie.release_date}</h5>
            <h5>{}</h5>
            <p>{movie.vote_average}</p>
          </div>
        </div>
        <p className="AboutFilm">{movie.overview}</p>
        <div className="videoCenter">
          <video
            className="videoHeight"
            height={"100%"}
            src={movie.trailer}
            controls
          ></video>
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default MovieCardSelect;
