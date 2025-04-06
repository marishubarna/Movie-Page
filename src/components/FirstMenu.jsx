import React, { useState, useEffect } from "react";
import "../index.css";
import FadeIn from "./Animation/FadeIn";
import { Link } from "react-router-dom";
import SearchFuncktion from "./SearchInput/SearchFuncktion";

const MenuItems = [
  <Link className="LinkMenu" to={"/"}>
    Home
  </Link>,
  <Link className="LinkMenu" to={"/"}>
    Services
  </Link>,
  <Link className="LinkMenu" to={"/"}>
    About
  </Link>,
  <Link className="LinkMenu" to={"/"}>
    Contact
  </Link>,

  <Link className="LinkMenu" to={"/favourite"}>
    Favourite
  </Link>,
];

const FirstMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleSelect = (movieId) => {
    // Handle movie selection if needed
    console.log("Selected movie:", movieId);
  };

  return (
    <div className="display-center">
      <div id="MenuDisplay" className="MenuDisplay">
        <ul className="MenuList-1">
          {MenuItems.map((item, index) => (
            <FadeIn key={index}>
              <li className="LinkMenu">{item}</li>
            </FadeIn>
          ))}
        </ul>
        <div className="switchDisplay">
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
            <span className="clouds_stars"></span>
          </label>
        </div>
      </div>
      <div className="search-container">
        <SearchFuncktion handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default FirstMenu;
