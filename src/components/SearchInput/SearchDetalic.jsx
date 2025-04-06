import React from "react";
import FirstMenu from "../FirstMenu";
import { useState } from "react";
import SearchPage from "./SearchPage";
import "./SearchStyle.css";

const SearchDetalic = () => {
  return (
    <div>
      <FirstMenu />
      <SearchPage />
    </div>
  );
};

export default SearchDetalic;
