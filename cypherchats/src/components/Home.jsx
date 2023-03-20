import React from "react";
import Chatbar from "./Chatbar";
import Sidebar from "./Sidebar";
import { auth, db } from "../config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{
      //   type: "spring",
      //   stiffness: 260,
      //   damping: 20,
      // }}
    >
      <div className="HomeWrapper container d-flex align-items-center justify-content-center rounded">
        <div className="row w-100 shadow rounded ">
          <div className="col-md-4 px-0 ChatListUsersWrapper">
            <Sidebar />
            
          </div>
          <div className="col-md-8 px-0 ChatbarWrapper">
            <Chatbar />

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
