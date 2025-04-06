import React, { useState } from "react";
import FirstMenu from "./components/FirstMenu";
import MovieList from "./components/MovieList/MovieList";
import Carusel from "./components/Carusel/Carusel";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect";
import "./App.css";

const App = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSelect = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <div id="root">
      <FirstMenu id="MenuDisplay" />
      <Carusel />
      <MovieList id="TitleOfMovies" handleSelect={handleSelect} />
      {selectedMovieId && <MovieCardSelect selectedMovieId={selectedMovieId} />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
