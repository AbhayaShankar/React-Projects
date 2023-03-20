import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import imdb from "../../media/imdb.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ search, setSearch, handleChange, handleSearch }) {
  const [isOpen, setOpen] = useState(false);
  const handleHome = () => {
    setSearch("");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="header-left">
        <Link onClick={handleHome} to="/">
          <p className="cinetrek"> Cinetrek</p>
        </Link>
        <Link onClick={scrollToTop} to="/movies/popular">
          Popular
        </Link>
        <Link onClick={scrollToTop} to="/movies/top_rated">
          Top Rated
        </Link>
        <Link onClick={scrollToTop} to="/movies/upcoming">
          Upcoming
        </Link>
        <Link onClick={scrollToTop} to="/about">
          About
        </Link>
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
      <div className="header__hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        {/* <div className="header-left toggle__links">
          <Link onClick={scrollToTop} to="/movies/popular">
            Popular
          </Link>
          <Link onClick={scrollToTop} to="/movies/top_rated">
            Top Rated
          </Link>
          <Link onClick={scrollToTop} to="/movies/upcoming">
            Upcoming
          </Link>
          <Link onClick={scrollToTop} to="/about">
            About
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
