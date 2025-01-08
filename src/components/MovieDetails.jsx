import React from "react";
import { useParams } from "react-router-dom";
import { MoviesItems } from "../API-File/MovieList";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = MoviesItems.find((item) => item.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>
      <h2>{movie.engName}</h2>
      <img src={movie.images} alt={movie.name} />
      <h5>{movie.country}</h5>
      <p>{movie.aboutFilm}</p>
      <video src={movie.trailer} controls></video>
    </div>
  );
};

export default MovieDetails;
