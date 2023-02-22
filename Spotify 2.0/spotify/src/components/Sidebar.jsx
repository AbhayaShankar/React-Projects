import React from "react";
import "./Sidebar.css";
import sidebarLogo from "../Resources/Images/sidebar-logo.png";
import HomeIcon from "../Resources/Images/Home.png";
import SearchIcon from "../Resources/Images/Search.png";
import MusicLibraryIcon from "../Resources/Images/MusicLibrary.png";

import SidebarOptions from "./SidebarOptions";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={sidebarLogo} alt="sidebar-logo" />
      <div className="sidebar-top">
        <img className="sidebar-icon" src={HomeIcon} alt="homeicon" />
        <SidebarOptions Icon={HomeIcon} title={"Home"} />
      </div>
      <div className="sidebar-top">
        <img className="sidebar-icon" src={SearchIcon} alt="search" />
        <SidebarOptions Icon={SearchIcon} title={"Search"} />
      </div>
      <div className="sidebar-top">
        <img className="sidebar-icon" src={MusicLibraryIcon} alt="music" />
        <SidebarOptions Icon={MusicLibraryIcon} title={"Your Library"} />
      </div>
      <br />
      <strong className="sidebar-title">PLAYLISTS </strong>
      <hr />
      <br />
      <div className="sidebar-playlists">
        {playlists?.items?.map((playlist) => (
          <SidebarOptions title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
