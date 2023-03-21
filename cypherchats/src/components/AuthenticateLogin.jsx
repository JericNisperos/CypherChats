import React, { useState } from "react";
import { auth, googleProvider, db } from "../config/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AuthenticateLogin() {
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  async function GoogleLogin(e) {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
      });
      await setDoc(doc(db, "userChats", res.user.uid), {});
    } catch (err) {
      console.error(err);
    }
  }

  async function Login(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        setErrormsg("Incorrect Email or Password.");
      }
      if (err.code === "auth/invalid-email") {
        setErrormsg("Please type a valid Email address.");
      }

      if (err.code === "auth/internal-error") {
        setErrormsg("Make sure to type your Email and Password");
      }
    }
  }

  return (
    <div>
      <form className="LoginWrapper p-4 rounded shadow" onSubmit={Login}>
        <h2 className="text-center mt-5 mb-5">Login your Account</h2>
        <div className="form-group was-validated">
          <input
            className="form-control no-border ml-1"
            type="email"
            placeholder="Email Address"
          />
          <div className="invalid-feedback text-center">
            Please enter a valid Email Address
          </div>
        </div>
        <div className="mt-5    form-group was-validated">
          <input
            type="password"
            className="form-control no-border ml-1"
            minLength="6"
            placeholder="Password"
          />
          <div className="invalid-feedback text-center">
            Please enter atleast 6 characters
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="info">
            By logging in, you agreed to the{" "}
            <a href="#/" className="register-button">
              Terms and Conditions
            </a>
            .
          </p>
          <p className="info error">{errormsg}</p>
          <button className="btn btn-info" type="submit">
            Login Account
          </button>
          <div className="mt-5">
            <button className="btn btn-info" onClick={GoogleLogin} type="">
              Sign In with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthenticateLogin;
