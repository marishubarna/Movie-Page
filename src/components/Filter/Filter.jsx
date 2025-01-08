// import React from "react";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   moviesItemsForFilter: [],
//   filterRating: 0,
// };

// const Filter = () => {
//   return <div>Filter</div>;
// };

// export default Filter;

import React, { useState } from "react";
import { moviesItemsForFilter } from "./DataFilter";
import MenuFirst from "../FirstMenu";
import MovieCardDetalic from "../MovieCardDetalic";

const Filter = () => {
  const [movies, setMovies] = useState(moviesItemsForFilter);

  const handleFilterChange = (event) => {
    const rating = event.target.value;

    if (rating === "high") {
      setMovies(moviesItemsForFilter.filter((movie) => movie.rating >= 7.0));
    } else if (rating === "18+") {
      setMovies(moviesItemsForFilter.filter((movie) => movie.ageRating === 18));
    } else if (rating === "Фільм") {
      // Fix: Check if genre includes "Фільм"
      setMovies(
        moviesItemsForFilter.filter((movie) => movie.genre.includes("Фільм"))
      );
      console.log("Filtered movies:", movies); // Debug
    } else {
      setMovies(moviesItemsForFilter);
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
