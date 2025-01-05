import React, { useState } from "react";
import { MoviesItems } from "../API-File/MovieList";
import MovieCard from "../MovieCard";

const LogicFunction = () => {
  const [selecte, setSelecte] = useState(MoviesItems);

  return (
    <div className="movie-grid">
      {selecte.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default LogicFunction;
