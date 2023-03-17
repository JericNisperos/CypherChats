import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../config/Firebase';
import Navbar from './Navbar';

function Home() {

  async function Logout() {
    try {
        await signOut(auth)
        console.log(auth?.currentUser?.email)
    } catch (err) {
        console.error(err);
    }
}
  return (
    <div>Home
      {/* <h1>HOME IS HERE</h1> */}
      <Navbar />
      <button className='btn btn-success'  onClick={Logout}>Log Out</button>
    </div>
    
  )
}

export default Home