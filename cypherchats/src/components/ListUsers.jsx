import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { AuthContext } from "../contexts/AuthContext";
import { ChatContext } from "../contexts/ChatContext";

function ListUsers() {
  const [listUsers, setlistUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    function getChats() {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setlistUsers(doc.data());
      });

      return () => {
        unsub();
      };
    }

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  function handleSelect(u) {
    dispatch({ type: "CHANGE_USER", payload: u });
  }

  return (
    <div className="ChatlistWrapper">
      {listUsers &&
        Object.entries(listUsers)?.map((listUser) => (
          <div
            key={listUser[0]}
            onClick={() => handleSelect(listUser[1].userInfo)}
            className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0"
          >
            <img
              className="ProfileImg mx-3"
              src="https://t3.ftcdn.net/jpg/00/57/04/58/360_F_57045887_HHJml6DJVxNBMqMeDqVJ0ZQDnotp5rGD.jpg"
              alt="temp"
            />
            <div className="d-flex ">
              <span className="d-none d-sm-block px-3">
                {listUser[1].userInfo?.displayName}
              </span>
              <span className="d-none d-sm-block px-3">
                {listUser[1].userInfo?.lastMessage?.text}
              </span>
            </div>
          </div>
        ))}

      {/* <div
        key={listUser[0]}
        onClick={() => handleSelect(listUser[1].userInfo)}
        className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0"
      >
        <img
          className="ProfileImg mx-3"
          src="https://www.esports.net/wp-content/uploads/2022/08/Valorant-Brimstone-Guide.png"
          alt="temp"
        />
        <div className="d-flex ">
          <span className="d-none d-sm-block px-3">Brimstone</span>
          <span className="d-none d-sm-block px-3"></span>
        </div>
      </div> */}

      {/* <div className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0">
        <img
          className="ProfileImg mx-3"
          src="https://files.cults3d.com/uploaders/14684840/illustration-file/17ca0214-06a3-4984-b3a6-8b392b977a3a/viper-avatar.jpg"
          alt="temp"
        />
        <div className="d-flex ">
        <span className="d-none d-sm-block px-3">Viper</span>
        <span className="d-none d-sm-block px-3"></span>
        </div>
      </div>

      <div className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0">
        <img
          className="ProfileImg mx-3"
          src="https://files.cults3d.com/uploaders/14684840/illustration-file/ebcfcf6b-eca5-453c-86ed-1c21b474c2d9/phoenix-avatar.jpg"
          alt="temp"
        />
        <div className="d-flex ">
        <span className="d-none d-sm-block px-3">Phoenix</span>
        <span className="d-none d-sm-block px-3"></span>
        </div>
      </div> */}

    </div>
  );
}

export default ListUsers;
