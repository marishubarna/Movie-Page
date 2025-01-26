import React from "react";
import FirstMenu from "../FirstMenu";
import { useState } from "react";
import SearchPage from "./SearchPage";
import "./SearchStyle.css";

const SearchDetalic = () => {
  const [Themes, setThemes] = useState(false);
  return (
    <div
      style={{
        backgroundColor: Themes ? "white" : "black",
        color: Themes ? "black" : "white",
        border: Themes ? "black" : "white",
      }}
    >
      <FirstMenu setThemes={setThemes} />

      <SearchPage />
    </div>
  );
};

export default SearchDetalic;
