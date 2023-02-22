import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ title, icon }) {
  return (
    <div className="sidebarOptions">
      <p>{title}</p>
    </div>
  );
}

export default SidebarOptions;
