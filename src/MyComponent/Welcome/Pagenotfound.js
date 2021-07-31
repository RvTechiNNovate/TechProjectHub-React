import React from 'react'
import "./Pagenotfound.css"
import { Link } from 'react-router-dom'
import img1 from "./error1.png"

export const Pagenotfound = () => {


  return (
    < >

      <div style={{paddingTop: "150px"}} className='achha' id="Pagenotfound" name="Pagenotfound">

            
          <p>
          <h2 >Page Not Found</h2>
          <h4>
            <Link to="/" >Go To Home page</Link>
          </h4>
          
          
            <img style={{width:"40%"}} src={img1} alt="sdf"/>
          
          </p>

      </div>

    </>
  )

}