import React, { useState } from "react";
import { MoviesItems } from "../API-File/MovieList";

const [selectedMovie, setSelectedMovie] = useState(null);

export const handleSelect = (id) => {
  const movie = MoviesItems.find((item) => item.id === id);
  setSelectedMovie(movie);
  console.log(se);
};

const LogicFunction = () => {
  return (
    <div className="movie-grid">
      {selectedMovie && (
        <div>
          <h1>{selectedMovie.name}</h1>
          <h2>{selectedMovie.engName}</h2>
          <img src={selectedMovie.images} alt={selectedMovie.name} />
          <h5>{selectedMovie.country}</h5>
          <p>{selectedMovie.aboutFilm}</p>
          <video src={selectedMovie.trailer} controls></video>
        </div>
      )}
    </div>
  );
};

export default LogicFunction;
