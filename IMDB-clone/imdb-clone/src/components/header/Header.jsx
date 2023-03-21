import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import imdb from "../../media/imdb.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ search, setSearch, handleChange, handleSearch }) {
  const navRef = useRef();
  const [isOpen, setOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("toggle__nav");
  };

  const handleHome = () => {
    setSearch("");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="header-left toggle__nav">
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
        <Hamburger
          // onClick={showNavbar}
          toggled={isOpen}
          label="Show menu"
          toggle={setOpen}
          size={24}
        />
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
