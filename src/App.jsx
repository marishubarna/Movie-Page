import React, { useState } from "react";
import FirstMenu from "../src/components/FirstMenu";
import MovieList from "./components/MovieList/MovieList";
import Carusel from "./components/Carusel/Carusel";
import "./App.css";

// ...rest of the code
const App = () => {
  const [Themes, setThemes] = useState(false);

  return (
    <div>
      <FirstMenu />
      <Carusel />
      <MovieList />
    </div>
  );
};

export default App;
