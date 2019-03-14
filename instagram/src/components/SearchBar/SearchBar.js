import React from "react";

import "./SearchBar.css";
import instaCam from "../img/instacam.png";
import logo from "../img/logo.png";
import compass from "../img/compass.png";
import heart from "../img/heart.png";
import user from "../img/user.png";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <img className="camera" src={instaCam} alt="Instagram camera" />
      <div className="divider" />
      <img className="logo" src={logo} alt="Instagram logo" />
      <form className="searchBox">
        <input className="searchField" placeholder="Search" />
      </form>
      <img className="compass" src={compass} alt="Compass" />
      <img className="heart" src={heart} alt="heart" />
      <img className="user" src={user} alt="Profile Page" />
    </div>
  );
};

export default SearchBar;
