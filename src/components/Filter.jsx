import React, { useState } from "react";
import { MoviesItems } from "./API-File/MovieList";
import MenuFirst from "../components/FirstMenu";
import MovieCardDetalic from "../components/MovieCardDetalic";

const Filter = () => {
  const [movies, setMovies] = useState(MoviesItems);

  const handleFilterChange = (event) => {
    const rating = event.target.value;

    if (rating === "high") {
      setMovies(MoviesItems.filter((movie) => movie.rating >= 7.0));
    } else if (rating === "18+") {
      setMovies(MoviesItems.filter((movie) => movie.ageRating === 18));
    } else if (rating === "Фільм") {
      // Fix: Check if genre includes "Фільм"
      setMovies(MoviesItems.filter((movie) => movie.genre.includes("Фільм")));
      console.log("Filtered movies:", movies); // Debug
    } else {
      setMovies(MoviesItems);
    }
  };

  return (
    <div>
      <MenuFirst />
      <select onChange={handleFilterChange} className="filter-select">
        <option value="all">All Movies</option>
        <option value="high">Rating 7.0-9.0</option>
        <option value="18+">18+</option>
        <option value="Фільм">Фільм</option>
      </select>

      <ul className="MovieDisplay">
        {movies.map((movie) => (
          <MovieCardDetalic key={movie.id} MoviesItems={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
