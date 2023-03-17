import React from 'react'
import { auth, storage, db, googleProvider } from '../config/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function AuthenticateRegister() {
    const navigate = useNavigate();
    async function SignUp(e) {
        // const navigate = useNavigate();
        e.preventDefault();
        const email = e.target[1].value;
        const password = e.target[2].value;
        const displayName = e.target[0].value;
        try {
             const res = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email
            })
            console.log(auth.currentUser.email)
            navigate("/");
        } catch (err) {
            console.error(err);
        }
        
        
    };

  return (
    <form className='LoginWrapper p-4 rounded' onSubmit={SignUp}>
                            <h2 className='text-center mt-5 mb-5'>Register an Account</h2>
                            <div className='form-group was-validated'>
                                {/* <p className='form-label'>Email Address:</p> */}
                                <input
                                    className='form-control no-border ml-1'
                                    required
                                    placeholder="Display Name" />
                                <div className='invalid-feedback text-center'>
                                    Please enter your desired name
                                </div>
                            </div>
                            <div className='mt-3 form-group was-validated'>
                                {/* <p className='form-label'>Email Address:</p> */}
                                <input
                                    className='form-control no-border ml-1'
                                    type="email"
                                    required
                                    placeholder="Email Address" />
                                <div className='invalid-feedback text-center'>
                                    Please enter a valid Email Address
                                </div>
                            </div>
                            <div className='mt-3 form-group was-validated'>
                                {/* <p className='form-label'>Password</p> */}
                                <input
                                    type="password"
                                    className='form-control no-border ml-1'
                                    required
                                    minLength="6"
                                    id="password"
                                    placeholder="Password" />
                                <div className='invalid-feedback text-center'>
                                    Please enter atleast 6 characters
                                </div>
                            </div>

                            <div className='mt-3 form-group was-validated'>
                                {/* <p className='form-label'>Password</p> */}
                                <input
                                    type="password"
                                    className='form-control no-border ml-1'
                                    required
                                    minLength="6"
                                    id="password2"
                                    placeholder="Repeat Password" />
                                <div className='invalid-feedback text-center'>
                                    Password must Match
                                </div>
                            </div>

                            <div className='text-center mt-3'>
                                <p className='info'>By registering your account, you agreed to the <a href="#/" className="register-button">Terms and Conditions</a>.</p>
                                <button className="btn btn-info" type="submit">Register Account</button>

                                {/* <p>Already have an account?<a href="#/" className="register-button"> Login here</a>.</p> */}
                            </div>
                        </form>
  )
}

export default AuthenticateRegister