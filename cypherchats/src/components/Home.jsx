import React from 'react'
import Chatbar from './Chatbar';
import Sidebar from './Sidebar';

function Home() {


  return (
    <div>
      <div className='container mx-auto'>
        <div className='row d-flex'>
          <div className="col-md-4 border">
          <Sidebar />
          </div>
          <div className=" col-md-8 border d-flex">
          <Chatbar />
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Home