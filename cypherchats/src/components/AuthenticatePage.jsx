import React, { useState } from "react";
import AuthenticateLogin from "./AuthenticateLogin";
import AuthenticateRegister from "./AuthenticateRegister";
import { motion } from "framer-motion";

function AuthenticatePage() {
  const [loginPage, setLoginPage] = useState(true);

  function ChangePage() {
    setLoginPage(!loginPage);
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 3,
      }}
    >
      <div>
        <div className="container d-flex justify-content-center align-items-center pt-5 h-100 d-inline-block">
          <div className="row">
            <div className="col-md-10 justify-content-center">
              <h1 className="display-1 title-heading text-center">
                Cypher Chats
              </h1>
              <h4 className="text-center">Where is everyone hiding?</h4>
              {loginPage ? (
                <>
                  <AuthenticateLogin />{" "}
                  <p className="text-center pt-5">
                    Don't have an account yet?{" "}
                    <a
                      href="#/"
                      onClick={ChangePage}
                      className="register-button"
                    >
                      Register
                    </a>
                    .
                  </p>
                </>
              ) : (
                <>
                  <AuthenticateRegister />
                  <p className="text-center pt-5">
                    Already have an account?{" "}
                    <a
                      href="#/"
                      onClick={ChangePage}
                      className="register-button"
                    >
                      Login Here
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AuthenticatePage;
