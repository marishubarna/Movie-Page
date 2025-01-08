import React from "react";
import { MoviesItems } from "./API-File/MovieList";
import { useState } from "react";
import MovieCard from "./MovieCard";
import "../components/styleMovie.css";
import { Link } from "react-router-dom";

const MovieItemLIst = ({ handleSelect }) => {
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
            return (
              <Link
                key={items.id}
                onClick={() => handleSelect(items.id)}
                to={`/movies/${items.id}`}
              >
                <MovieCard key={items.id} MoviesItems={items} />
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieItemLIst;
