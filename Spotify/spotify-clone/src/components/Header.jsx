import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { useDataLayerValue } from "../DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div>
        <div className="header__left">
          <SearchIcon className="search__icon_" />
          <input type="text" placeholder="Search for artist, song and album" />
        </div>
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
