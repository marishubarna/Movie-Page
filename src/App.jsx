// filepath: /c:/Users/Laptop/Documents/it-school/MovieWebSite/src/App.jsx
import React, { useState } from "react";
import FirstMenu from "../src/components/FirstMenu";
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
    <div id="root" className={Themes ? "black" : "white"}>
      <FirstMenu setThemes={setThemes} />
      <Carusel />
      <MovieList setThemes={setThemes} handleSelect={handleSelect} />
      {selectedMovieId && <MovieCardSelect selectedMovieId={selectedMovieId} />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
