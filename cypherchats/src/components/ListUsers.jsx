import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { AuthContext } from "../contexts/AuthContext";

function ListUsers() {

  const [listUsers, setlistUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(()=> {
    function getChats() {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setlistUsers(doc.data());


    });
 

    return () => {
      unsub();
    };
  };

  currentUser.uid && getChats();
  
  }, [currentUser.uid]);

  
  console.log(listUsers);
  return (
    <div className="ChatlistWrapper">
      {Object.entries(listUsers)?.map(listUsers => (
      
      <div key={listUsers[0]} className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0">
        <img
          className="ProfileImg mx-3"
          src="https://www.esports.net/wp-content/uploads/2022/08/Valorant-Brimstone-Guide.png"
          alt="temp"
        />
        <div className="d-flex ">
        <span className="d-none d-sm-block px-3">{listUsers[1].userInfo.displayName}</span>
        <span className="d-none d-sm-block px-3">{listUsers[1].userInfo.lastMessage?.text}</span>
        </div>
      </div>
      ))}




      {/* <div className="Chatlist-items d-flex align-items-center pt-2 pb-2 mr-0">
        <img
          className="ProfileImg mx-3"
          src="https://files.cults3d.com/uploaders/14684840/illustration-file/17ca0214-06a3-4984-b3a6-8b392b977a3a/viper-avatar.jpg"
          alt="temp"
        />
        <div className="d-flex ">
        <span className="d-none d-sm-block px-3">Viper</span>
        <span className="d-none d-sm-block px-3">Ha? Hamburger</span>
        </div>
      </div> */}

    </div>
  );
}

export default ListUsers;
