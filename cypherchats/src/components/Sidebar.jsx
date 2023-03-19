import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="SidebarWrapper">
      <Navbar />
      <div className="SidebarContent">
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search User"
            className="w-100 form-control no-border"
          />
          <button type="button" className="btn searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            {/* Search */}
          </button>
        </div>
        <div className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est modi
          reprehenderit architecto fuga, nam nesciunt quisquam molestiae minima
          officiis corporis magni molestias aliquid suscipit porro odio omnis,
          dolorem voluptate!
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
