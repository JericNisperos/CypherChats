import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { db } from "../config/Firebase";
import { ChatContext } from "../contexts/ChatContext";
import Messages from "./Messages";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../contexts/AuthContext";

import {
  faEllipsis,
  faPaperclip,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Chatbar() {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");

  const audioPlayer = useRef(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      
    });

    return () => {
      unsub();
    };
    
  }, [data.chatId]);

  async function handleSend() {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          seen: false
        }),
      });
    } catch (err) {
      console.log(err);
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    audioPlayer.current.play();
    // if(!data.chatId.seen) {
      
    //   console.log("false to nung una")
    //   await updateDoc(doc(db, "chats", data.chatId), {
    //     messages: arrayUnion({
    //       seen: true
    //     }),
    //   });
    // }

    setText("");
  }

  function handleEnter(e) {
    e.code === "Enter" && handleSend();
  }
  return (
    <div className="ChatbarWrapper">
      <div className="ChatbarNavbar w-100 d-flex px-3 justify-content-between align-items-center">
        <span className="d-flex px-2 align-items-center">
          <img
            className="ProfileImg-small "
            src="https://t3.ftcdn.net/jpg/00/57/04/58/360_F_57045887_HHJml6DJVxNBMqMeDqVJ0ZQDnotp5rGD.jpg"
            alt="temp"
          />
          <span className="d-none d-sm-block px-3">
            {data.user?.displayName}
          </span>
        </span>

        <span className="ChatbarNavbar-icons d-flex">
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faEllipsis} className="px-3" />
        </span>
      </div>
      <div className="ChatbarContent pt-3">
        {messages.map((m) => (
          <Messages message={m} key={m.id} />
        ))}
      </div>
      <div className="ChatbarInput d-flex mt-auto justify-content-between">
        <input
          type="search"
          placeholder="Type something..."
          className="w-100 form-control"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleEnter}
          value={text}
        />
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPaperclip} style={{ cursor: "pointer" }} />
          <button
            className="d-flex justify-content-end btn"
            onClick={handleSend}
          >
            Send
          </button>
          <audio ref={audioPlayer} src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_9f35254621.mp3?filename=notification-sound-7062.mp3" />
        </div>
      </div>
    </div>
  );
}

export default Chatbar;
