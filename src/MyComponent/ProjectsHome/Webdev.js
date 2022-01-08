import React from 'react'
import "./All.css"
import { Link } from 'react-router-dom'

export const WebDev = () => {
    function alert1() {
        alert("Comming Soon")
    }

    return (


        <section id="webdev">
            <div style={{height:"80px",width:"100%", background: "rgba(98, 35, 214, 0.904)"}}>
    
            </div>
            <section style={{ backgroundColor: "aliceblue", minHeight: "50vh" }} id="">
                <h1 className="section-heading mb75px">
                    <span className="header-name-icon">
                        <i className="far fa-address-card"></i>
                    </span>
                    <span>
                        Web Dev Projects
                    </span>

                </h1>
                <div id="about-para">
                    <p >
                        &emsp; "We are tried to build some Webdev project to improve your resume. we have collected Many Web Dev project for you with source code so you can actually participate in real time project of Web Dev . This will help you to boost your knowledge about Web Dev. "


                    </p>
                </div>




            </section>

            <section id="about">
                <h1 className="section-heading mb75px">
                    <span className="header-name-icon">
                        <i className="far fa-address-card"></i>
                    </span>
                    <span >
                        List
                    </span>

                </h1>
                <div id="about-para">
                    <ul >
                        <li>
                            <Link style={{ textDecoration: "none" }} onClick={() => alert1()}>1. To Dos</Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} onClick={() => alert1()}>2. Real TIme Chat App</Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} onClick={() => alert1()}>3. -------------</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}
