import React, { useState } from "react";
import { Link } from "react-router-dom";
import imdb from "../../media/imdb.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ search, handleChange, handleSearch }) {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img className="header-logo" src={imdb} alt="imdb-logo" />
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
      <div className="header-right">
        <SearchIcon
          className="header__search__icon"
          sx={{ color: "#c9c9c9" }}
        />
        {/* <h3>Search Box</h3> */}
        <form className="form" type="search">
          <input
            type="text"
            className="search__form"
            onChange={handleChange}
            value={search}
            onKeyDown={handleSearch}
            placeholder="Enter your search"
          />
        </form>
      </div>
      <div className="header-right-right">
        <h3>Abhaya</h3>
        <AccountCircleIcon sx={{ fontSize: 32, color: "#c9c9c9" }} />
      </div>
    </div>
  );
}

export default Header;
