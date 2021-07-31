import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'




import "./Hero.css"

export const Hero = () => {

    const text = useTypewriter({
        words: ["Data Science", "Web Development",
            "Artificial Inteligence", "Cyber Security", "Python", "Java", "C++"],
        loop: 0,
        typeSpeed: 100,
        delaySpeed: 2000,
    })
    return (
        <>

            <div className="herobg bg-img">
                <div className="blurehero">
                    <div  className=' noselect container heading-animated' id="welcome" name="welcome">
                        <p  >
                            <span>Welcome to the World of <br /></span><span className="span-typed-text">{text} </span><span><Cursor /> Project</span>
                            <br /><br /> <button className="btn btn-primary btn-round" type="submit">Get Started</button>
                        </p>

                       
                    </div>
                </div>

            </div>
        </>

    )
}
