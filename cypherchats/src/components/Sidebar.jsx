import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ListUsers from "./ListUsers";
import { collection, getDoc, getDocs, query, serverTimestamp, updateDoc, where, doc, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { AuthContext } from "../contexts/AuthContext";

function Sidebar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  async function handleSearch() {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  }
  function handleKey(e) {
    e.code === "Enter" && handleSearch();
  }

  async function handleSelect() {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,

          },
          [combinedId+".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,

          },
          [combinedId+".date"]: serverTimestamp()
        });
      }
    } catch (err) {
      console.log(err);
    }

    setUser(null);
    setUsername("")
  }
  return (
    <div className="SidebarWrapper">
      <Navbar />
      <div className="SidebarContent">
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search User"
            className="w-100 form-control no-border"
            onKeyDown={handleKey}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <button type="button" className="btn searchIcon">
            <FontAwesomeIcon icon={faSearch} />
            {/* Search */}
          </button>
        </div>
        <div className="Searchlist">
          {user && (
            <div
              onClick={handleSelect}
              className=" d-flex align-items-center pt-2 pb-2 mr-0"
            >
              <img
                className="ProfileImg mx-3"
                src="https://valorantinfo.com/images/us/reyna_valorant_icon_3223.webp"
                alt="temp"
              />
              <span className="d-none d-sm-block px-3 ">
                {user.displayName}
              </span>
            </div>
          )}
        </div>
        <div className="">
          <ListUsers />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
