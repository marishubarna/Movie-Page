import React from "react";
import "../components/styleMovie.css";
// import { MoviesItems } from './API-File/MovieList';

const MovieCard = ({ MoviesItems }) => {
  return (
    <div>
      <li>
        <img
          className="images-dispay"
          src={MoviesItems.images}
          height={"100%"}
          width={"100%"}
          alt={MoviesItems.name}
        />
        <h1 className="titleMovieCardFont">{MoviesItems.name}</h1>
        <h5 className="smallTitleMovieCardFont">{MoviesItems.engName}</h5>
      </li>
    </div>
  );
};

export default MovieCard;
