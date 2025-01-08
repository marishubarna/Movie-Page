import React, { useState } from "react";
import FirstMenu from "./components/FirstMenu";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carusel from "./components/Carusel.jsx"; // Fix import path
import MovieCard from "../src/components/MovieItemLIst";
import Carusel from "./components/Carusel/Carusel";
import SearchFuncktion from "./components/SearchInput.jsx/SearchFuncktion";
import "./App.css";

// ...rest of the code
const App = () => {
  const [Themes, setThemes] = useState(false);

  return (
    <div
      id="root"
      style={{
        backgroundColor: Themes ? "black" : "white",
        margin: "0",
        height: "100%",
        padding: "0",
        color: Themes ? "white" : "black",
      }}
    >
      <FirstMenu setThemes={setThemes} />
      <SearchFuncktion />
      <Carusel />
      <MovieCard />
    </div>
  );
};

export default App;
