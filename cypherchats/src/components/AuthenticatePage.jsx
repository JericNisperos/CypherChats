import React, { useState } from 'react'
import AuthenticateLogin from './AuthenticateLogin';
import AuthenticateRegister from './AuthenticateRegister';





function AuthenticatePage() {
    const [loginPage, setLoginPage] = useState(true);

    function ChangePage() {
        setLoginPage(!loginPage);
    }

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center pt-5 h-100 d-inline-block">
                <div className="row">
                    <div className="col-md-10 justify-content-center">
                        <h1 className='display-1 title-heading text-center'>Cypher Chats</h1>
                        <h4 className='text-center'>Where is everyone hiding?</h4>
                        {loginPage ? <><AuthenticateLogin /> <p className='text-center'>Don't have an account yet? <a href="#/" onClick={ChangePage} className="register-button">Register</a>.</p></>
                            : <><AuthenticateRegister /><p className='text-center'>Already have an account? <a href="#/" onClick={ChangePage} className="register-button">Login Here</a>.</p></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatePage