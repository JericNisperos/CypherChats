import React from 'react'
import { auth } from '../config/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function AuthenticateLogin() {
    const navigate = useNavigate();
    async function Login(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log(auth.currentUser)
            navigate("/");
        } catch (err) {
            if(err === "auth/wrong-password");
            alert("Incorrect Password.");
            console.error(err);
        }
    };

    return (

        <form className='LoginWrapper p-4 rounded' onSubmit={Login}>
            <h2 className='text-center mt-5 mb-5'>Login your Account</h2>
            <div className='form-group was-validated'>
                <input
                    className='form-control no-border ml-1'
                    type="email"
                    placeholder="Email Address" />
                <div className='invalid-feedback text-center'>
                    Please enter a valid Email Address
                </div>
            </div>
            <div className='mt-5    form-group was-validated'>
                <input
                    type="password"
                    className='form-control no-border ml-1'
                    minLength="6"
                    placeholder="Password" />
                <div className='invalid-feedback text-center'>
                    Please enter atleast 6 characters
                </div>
            </div>

            <div className='text-center mt-3'>
                <p className='info'>By logging in, you agreed to the <a href="#/" className="register-button" >Terms and Conditions</a>.</p>
                <button className="btn btn-info" type="submit">Login Account</button>
            </div>
        </form>
    )
}

export default AuthenticateLogin