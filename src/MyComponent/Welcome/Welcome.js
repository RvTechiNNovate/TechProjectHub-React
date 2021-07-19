import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

import "./Welcome.css"

export const Welcome = () => {
 

  const text = useTypewriter({
    words: ["Data Science", "Web Development",
    "Artificial Inteligence","Cyber Security", "Python","Java","C++"],
    loop:0,
    typeSpeed:200,
    delaySpeed:2000,
  })


  return (
    <>
    <div className='heading-animated'>
        <p>
      <span>Welcome to the World of </span><span className="span-typed-text">{text} </span><span><Cursor /> Project</span>
      </p>
      
    </div>
    
    </>
  )

}