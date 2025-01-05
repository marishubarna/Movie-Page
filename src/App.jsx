import React from "react";
import FirstMenu from "./components/FirstMenu";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carusel from "./components/Carusel.jsx"; // Fix import path
import MovieCard from "../src/components/MovieItemLIst";
import Carusel from "./components/Carusel/Carusel";
import SearchFuncktion from "./components/SearchInput.jsx/SearchFuncktion";

// ...rest of the code
const App = () => {
  return (
    <div>
      <FirstMenu />
      <SearchFuncktion />
      <Carusel />
      <MovieCard />
    </div>
  );
};

export default App;
