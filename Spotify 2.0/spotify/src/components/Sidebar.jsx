import React from "react";
import "./Sidebar.css";
import sidebarLogo from "../Resources/Images/sidebar-logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={sidebarLogo} alt="sidebar-logo" />
    </div>
  );
}

export default Sidebar;
