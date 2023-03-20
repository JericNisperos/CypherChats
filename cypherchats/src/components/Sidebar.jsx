import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ListUsers from "./ListUsers";

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
        <div className="">
          <ListUsers />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
