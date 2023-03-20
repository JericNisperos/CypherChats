import { signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth, db } from "../config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="NavbarWrapper d-flex align-items-center">
      <div className="col-md-9 d-flex justify-content-start align-items-center">
        <img
          src="/favicon.ico"
          width="64px"
          height="48px"
          alt="logo"
          className="rounded mx-1"
        ></img>
        <p className="displayName text-center mt-0 mb-0 px-2">{currentUser.displayName}</p>
      </div>
      <div className="col-md-3 d-flex justify-content-end align-right">
        <a
          className="d-flex justify-content-end LogoutButton btn btn-light mx-1"
          href="#/"
          onClick={(e) => {
            signOut(auth);
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
