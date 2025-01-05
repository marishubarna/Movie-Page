import React from "react";
import "../components/styleMovie.css";
// import APILibrary from "../components/API-File/MovieList";
const MovieCardDetalic = ({ MoviesItems }) => {
  return (
    <div>
      <li>
        <img
          className="images-dispay"
          src={MoviesItems.images}
          height={"170px"}
          alt=""
        />
        <h1 className="titleMovieCardFont"> {MoviesItems.name}</h1>
        <h5 className="smallTitleMovieCardFont">{MoviesItems.genre}</h5>
        <h5 className="smallTitleMovieCardFont">{MoviesItems.year}</h5>
      </li>
    </div>
  );
};

export default MovieCardDetalic;
