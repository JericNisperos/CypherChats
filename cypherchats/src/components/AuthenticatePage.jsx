import React, { useEffect, useState } from 'react'
import AuthenticateLogin from './AuthenticateLogin';
import AuthenticateRegister from './AuthenticateRegister';
import { auth } from '../config/Firebase';
import {signOut} from 'firebase/auth';





function AuthenticatePage() {
    const [loginPage, setLoginPage] = useState(true);
    var Page = loginPage;
    function InfoPage() {
        useEffect(() => {
            Page = loginPage;
        });
        if (Page) {
            return <p className='text-center'>Don't have an account yet? <a href="#/" onClick={ChangePage} className="register-button">Register</a>.</p>
        } else {

        }


    }

    function ChangePage() {
        setLoginPage(!loginPage);
    }

    async function CheckUser() {
        try {
            if (auth.currentUser)
                console.log("Account is " + auth.currentUser.email)
            else
                console.log("No Account")
        } catch (err) {
            console.error(err);
        }
    }

    async function Logout() {
        try {
            await signOut(auth)
            console.log(auth?.currentUser?.email)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center pt-5 h-100 d-inline-block">
                <div className="row">
                    <div className="col-md-10 justify-content-center">
                        <h1 className='display-1 title-heading text-center'>Cypher Chats</h1>
                        <h4 className=' title-heading text-center'>Where is everyone hiding?</h4>
                        {loginPage ? <><AuthenticateLogin /> <p className='text-center'>Don't have an account yet? <a href="#/" onClick={ChangePage} className="register-button">Register</a>.</p></>
                            : <><AuthenticateRegister /><p className='text-center'>Already have an account? <a href="#/" onClick={ChangePage} className="register-button">Login Here</a>.</p></>}
                    {/* <button onClick={CheckUser}>Check User Logged In</button>
                    <button onClick={Logout}>Log Out</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatePage