import React from 'react'
import Chatbar from './Chatbar';
import Sidebar from './Sidebar';
import { auth, db } from '../config/Firebase';
import { doc, getDoc } from 'firebase/firestore';


function Home() {
  


  return (
    <div>
      <div className="HomeWrapper container d-flex align-items-center justify-content-center rounded">
        <div className="row">
          <div className="col-md-4 px-auto">
          <Sidebar />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est modi reprehenderit architecto fuga, nam nesciunt quisquam molestiae minima officiis corporis magni molestias aliquid suscipit porro odio omnis, dolorem voluptate!
          </div>
          <div className="col-md-8 border">
          {/* <Chatbar /> */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, velit cum voluptate, eius ab sed harum nostrum necessitatibus sint commodi aliquam odit provident, deleniti distinctio at voluptatem nesciunt? Id, facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus porro rerum eos error, quisquam aperiam accusantium voluptatibus laborum et iure. Facere cum delectus neque cupiditate vel consequuntur tempora. Quisquam.
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className='container d-flex justify-content-center align-items-center h-100 w-100'>
    //     <div className='row'>
    //       <div className="col-md-4 border">
    //       <Sidebar />
    //       </div>
    //       <div className=" col-md-8 border d-flex">
    //       {/* <Chatbar /> */}
    //       </div>
    //     </div>
    //   </div>
      
    // </div>
    
  )
}

export default Home