import React from 'react'

function Login() {
  return (
    <div className="text-center">
      <p>Email</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your email here" />
      <p>Password</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Type your Password here" />
      <p></p>

      <button onClick={SignIn}>Sign In</button>
      <p>
      </p>
      <button onClick={GoogleLogin}>Sign In using Google</button>


    </div>
  )
}

export default Login