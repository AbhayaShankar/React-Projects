import React from "react";
import "./Sidebar.css";
import sidebarLogo from "../Resources/Images/sidebar-logo.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOptions from "./SidebarOptions";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={sidebarLogo} alt="sidebar-logo" />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Music Library" />
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
