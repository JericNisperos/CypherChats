import React from "react";

function Messages() {
  return (
    <div>
        <div className="MessagesWrapper d-flex">
      <div className="MessageImg d-flex p-3 flex-column">
        <img
          className="ProfileImg-msg"
          src="https://valorantinfo.com/images/us/yoru_valorant_icon_2860.webp"
          alt="temp"
        />
        <span>Just now</span>
      </div>

      <div className="MessageContent align-items-center justify-content-end w-75 d-flex ">
        <p className="MessageSender px-3 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          assumenda repellat deserunt provident illo autem ducimus, veniam,
          labore minus odit similique. Vero voluptates quis iste explicabo iusto
          voluptas molestiae inventore.
        </p>
      </div>
    </div>

    <div className="MessagesWrapper Owner d-flex">
      <div className="MessageImg d-flex p-3 flex-column">
        <img
          className="ProfileImg-msg"
          src="https://valorantinfo.com/images/us/yoru_valorant_icon_2860.webp"
          alt="temp"
        />
        <span>Just now</span>
      </div>

      <div className="MessageContent align-items-center justify-content-end w-75 d-flex ">
        <p className="MessageSender px-3 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          assumenda repellat deserunt provident illo autem ducimus, veniam,
          labore minus odit similique. Vero voluptates quis iste explicabo iusto
          voluptas molestiae inventore.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Messages;
