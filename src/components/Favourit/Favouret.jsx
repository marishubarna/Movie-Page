import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/zustanStore";
import { loadFromLocalStorage } from "../../store/Slice";
import { useDispatch } from "react-redux";
import "./Favourite.css";
import FirstMenu from "./../FirstMenu";

const Favouret = () => {
  const [Themes, setThemes] = useState(false);
  const dispatch = useDispatch();
  const favourites = useStore((state) => state.favourites);
  const addMovie = useStore((state) => state.addMovie);
  const removeAll = useStore((state) => state.removeAll);

  useEffect(() => {
    const storeData = {
      value: JSON.parse(localStorage.getItem("FavouriteValue")),
      liked: JSON.parse(localStorage.getItem("Favourite")),
    };
    dispatch(loadFromLocalStorage(storeData));
  }, [dispatch]);

  useEffect(() => {
    const value = favourites.map((movie) => movie.id);
    localStorage.setItem("FavouriteValue", JSON.stringify(value));
  }, [favourites]);

  return (
    <div
      id="root"
      style={{
        backgroundColor: Themes ? "white" : "black",
        color: Themes ? "black" : "white",
      }}
    >
      <FirstMenu setThemes={setThemes} />
      <h1 className="header-favourites-movies">
        {" "}
        Favourite: {favourites.length} Movies{" "}
      </h1>
      <div className="pickedMovies">
        {favourites.map((movie) => (
          <div key={movie.id} className="movieListFavourite">
            <img
              className="ImagesWidth"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || "Movie poster"}
              onError={(e) => {
                e.target.src = "/placeholder.jpg";
              }}
            />
            <h2 className="header-width-favourite">{movie.title}</h2>
            <button className="GreenButton" onClick={() => removeAll(movie.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favouret;
