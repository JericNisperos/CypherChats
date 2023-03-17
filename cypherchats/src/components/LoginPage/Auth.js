// import React, { useEffect, useState } from 'react'
// import { auth, googleProvider } from '../../config/Firebase';
// import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// import "../styles.scss";

// function Auth() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [authUser, setAuthUser] = useState("");
//     const [currentPage, setCurrentPage] = useState("Login");

//     async function Signup() {
//         try {
//             await createUserWithEmailAndPassword(auth, email, password)
//             console.log(auth.currentUser.email)
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     async function SignIn() {
//         try {
//             await signInWithEmailAndPassword(auth, email, password)
//             console.log(auth.currentUser.email)
//         } catch (err) {
//             console.error(err);
//         }
//     };


//     async function GoogleLogin() {
//         try {
//             await signInWithPopup(auth, googleProvider)
//             console.log(auth.currentUser.email)
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     async function CheckUser() {
//         try {
//             if (auth.currentUser)
//                 setAuthUser(auth.currentUser.email);
//             else
//                 setAuthUser("No Account");
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     async function Logout() {
//         try {
//             await signOut(auth)
//             console.log(auth?.currentUser?.email)
//         } catch (err) {
//             console.error(err);
//         }
//     }


//     function RenderSignUp() {
//         return (
//             <div>
//                 <p>Email</p>
//                 <input
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Type your email here" />
//                 <p>Password</p>
//                 <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Type your Password here" />
//                 <p>Repeat Password</p>
//                 <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Repeat Password Here" />
//                 <p></p>
//                 <button className="btn btn-success" onClick={(e) => setCurrentPage("Login")}>Login Instead</button>
//                 <button className="btn btn-success" onClick={Signup}>Register</button>
//             </div>
//         )
//     }

//     return (
//         <div className='Auth'>
//             <div className="auth-container container text-center d-flex justify-content-center pt-5">
//                 <div className="row">
//                     <div className="container-box col-md-12 justify-content-center">
//                         <h1 className='display-2 title-heading'>Cypher Chats</h1>
//                         {/* {currentPage === "Login" ? <RenderLogin /> : <RenderSignUp />} */}
//                         <div>
//                             <div>
//                                 <p>Email Adress:</p>
//                                 <input
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Type your email here" />
//                                 <div className='invalid-feedback'>

//                                 </div>
//                                 <p>Password</p>
//                                 <input
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     type="password"
//                                     placeholder="Type your Password here" />
//                                 <p></p>

//                                 <button className="btn btn-success" onClick={SignIn}>Sign In</button>
//                             </div>
//                             <p>
//                             </p>
//                             <button className="btn btn-success" onClick={(e) => setCurrentPage("Register")}>Register an Account</button>
//                             <button className="btn btn-success" onClick={GoogleLogin}>Sign In using Google</button>
//                         </div>
//                         <RenderSignUp />
//                         <p></p>
//                         <button onClick={CheckUser}>Check User Logged In</button>
//                         {/* {auth.currentUser ? <button onClick={Logout}>Log Out</button> : <button onClick={Logout}>No Account</button>} */}
//                         <p>{auth?.currentUser?.email}</p>
//                         {/* <button onClick={Logout}>Log Out</button> */}



//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Auth