import {
  faClipboard,
  faEllipsis,
  faFile,
  faPaperclip,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="ChatbarContent pt-3">
        <Messages />
      </div>
      <div className="ChatbarInput d-flex mt-auto justify-content-between">
        <input
          type="search"
          placeholder="Type something..."
          className="w-100 form-control"
        />
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPaperclip} style={{ cursor: "pointer" }} />
          <button className="d-flex justify-content-end btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbar;
