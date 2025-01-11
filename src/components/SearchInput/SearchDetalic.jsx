import React from "react";
import FirstMenu from "../FirstMenu";
import { useState } from "react";
import SearchPage from "./SearchPage";

const SearchDetalic = () => {
  const [Themes, setThemes] = useState(false);
  return (
    <div
      style={{
        backgroundColor: Themes ? "black" : "white",
        color: Themes ? "white" : "black",
      }}
    >
      <FirstMenu setThemes={setThemes} />

      <SearchPage />
    </div>
  );
};

export default SearchDetalic;
