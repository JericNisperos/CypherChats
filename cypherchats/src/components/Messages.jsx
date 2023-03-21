import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

function Messages({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(()=> {
    ref.current?.scrollIntoView({ behavior: "smooth"});
  }, [message]);

  return (
    <div>
      <div ref={ref} className={`MessagesWrapper d-flex ${message.senderId === currentUser.uid && "Owner"}`}>
        <div className="MessageImg d-flex p-3 flex-column">
          <img
            className="ProfileImg-msg"
            src="https://valorantinfo.com/images/us/yoru_valorant_icon_2860.webp"
            alt="temp"
          />
          <span>3m ago</span>
        </div>

        <div className="MessageContent align-items-center w-75 d-flex">
          <p className="MessageSender p-2 d-flex ">{message.text}</p>
        </div>
      </div>




      {/* <div className="MessagesWrapper Owner d-flex">
        <div className="MessageImg d-flex p-3 flex-column">
          <img
            className="ProfileImg-msg"
            src="https://www.esports.net/wp-content/uploads/2022/08/Sage-Valorant.png"
            alt="temp"
          />
          <span className="TimeStamp-text">Just now</span>
        </div>

        <div className="MessageContent align-items-center justify-content-end w-75 d-flex ">
          <p className="MessageSender p-2 ">Hello there!</p>
        </div>
      </div> */}
    </div>
  );
}

export default Messages;
