import React from "react";
import { MoviesItems } from "./API-File/MovieList";
import { useState } from "react";
import MovieCard from "./MovieCard";
import "../components/styleMovie.css";

const MovieItemLIst = () => {
  const [danes, setDanes] = useState(MoviesItems);

  const MovieItem = (query) => {
    const MovieCopy = [...MovieItem];
    setDanes((prev) => MovieCopy.filter((movie) => movie.name.includes(query)));
  };

  return (
    <>
      <div className="MovieListCenter">
        <ul className="MovieDisplay">
          {danes.map((items) => {
            return <MovieCard key={items.id} MoviesItems={items} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieItemLIst;
