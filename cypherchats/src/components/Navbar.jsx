import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../config/Firebase";
// import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="row border">
      <div className="col-md-3">
        <img src="/favicon.ico" width="64px" height="48px" alt="logo"></img>
      </div>
      <div className="col-md-6 text-center">
        <p>Amir El Amari</p>
      </div>
      <div className="col-md-3 justify-content-center">
        <a
          href="#/"
          onClick={(e) => {
            signOut(auth);
          }}
        >
          Log Out
        </a>
      </div>
    </div>
  );
}
