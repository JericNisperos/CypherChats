import { faEllipsis, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Messages from "./Messages";

function Chatbar() {
  return (
    <div className="ChatbarWrapper">
      <div className="ChatbarNavbar w-100 d-flex px-3 justify-content-between align-items-center">
        <span className="d-flex px-2 align-items-center">
          <img
            className="ProfileImg-small "
            src="https://valorantinfo.com/images/us/yoru_valorant_icon_2860.webp"
            alt="temp"
          />
          <span className="d-none d-sm-block px-3">Yoru</span>
        </span>

        <span className="ChatbarNavbar-icons d-flex">
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faEllipsis} className="px-3" />
        </span>
      </div>
      <div className="ChatbarContent">
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        
      </div>
      <div className="ChatbarInput d-flex mt-auto">
          <input
            type="search"
            placeholder="Your Message"
            className="w-100 form-control"
          />
        </div>
    </div>
  );
}

export default Chatbar;
