import {
  faClipboard,
  faEllipsis,
  faFile,
  faPaperclip,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrayUnion, doc, onSnapshot, Timestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/Firebase";
import { ChatContext } from "../contexts/ChatContext";
import Messages from "./Messages";
import { v4 as uuid} from "uuid";
import { AuthContext } from "../contexts/AuthContext";

function Chatbar() {
  const [messages, setMessages] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  const [text, setText] = useState("");

  useEffect(()=> {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc => {
      doc.exists() && setMessages(doc.data().messages)
    }));

    return() => {
      unsub();
    }
  }, [data.chatId]);

  async function handleSend(){
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          // senderId: currentUser.id,
          // date: Timestamp.now(),
        })
      })
      console.log(messages.id, text, messages.senderId, messages.date);
    } catch (err) {
      console.log(err);
    }

    
  }

  return (
    <div className="ChatbarWrapper">
      <div className="ChatbarNavbar w-100 d-flex px-3 justify-content-between align-items-center">
        <span className="d-flex px-2 align-items-center">
          <img
            className="ProfileImg-small "
            src="https://valorantinfo.com/images/us/yoru_valorant_icon_2860.webp"
            alt="temp"
          />
          <span className="d-none d-sm-block px-3">{data.user?.displayName}</span>
        </span>

        <span className="ChatbarNavbar-icons d-flex">
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faEllipsis} className="px-3" />
        </span>
      </div>
      <div className="ChatbarContent pt-3">
        {messages.map((m)=>(
          <Messages message={m} key={m.id}/>
        ))}
        <Messages />
      </div>
      <div className="ChatbarInput d-flex mt-auto justify-content-between">
        <input
          type="search"
          placeholder="Type something..."
          className="w-100 form-control"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPaperclip} style={{ cursor: "pointer" }} />
          <button className="d-flex justify-content-end btn" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbar;
