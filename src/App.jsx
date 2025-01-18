import React, { useState } from "react";
import FirstMenu from "./components/FirstMenu";
import MovieList from "./components/MovieList/MovieList";
import Carusel from "./components/Carusel/Carusel";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect";
// import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [Themes, setThemes] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSelect = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <div id="root" className={Themes ? "white" : "black"}>
      <FirstMenu
        id="MenuDisplay"
        setThemes={setThemes}
        style={{ color: Themes ? "white" : "black" }}
      />
      <Carusel />
      <MovieList
        id="TitleOfMovies"
        setThemes={setThemes}
        style={{ color: Themes ? "white" : "black" }}
        handleSelect={handleSelect}
      />
      {selectedMovieId && <MovieCardSelect selectedMovieId={selectedMovieId} />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
