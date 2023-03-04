import React from "react";
import { Link } from "react-router-dom";
import imdb from "../../media/imdb.png";
import "./Header.css";

function Header() {
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
        <h3>Search Box</h3>
      </div>
    </div>
  );
}

export default Header;
