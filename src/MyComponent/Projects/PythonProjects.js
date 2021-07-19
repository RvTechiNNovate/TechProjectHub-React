import React from 'react'
import "./All.css"
import { Link } from 'react-router-dom'

export const PythonProjects = () => {



    return (



        <>
            <section id="about">
                <h1 className="section-heading mb75px">
                    <span className="header-name-icon">
                        <i className="far fa-address-card"></i>
                    </span>
                    <span>
                        Python Projects
                    </span>

                </h1>
                <div id="about-para">
                    <p >
                        &emsp; "We are tried to build some Python project to improve your resume. we have collected Many Python project for you with source code so you can actually participate in real time project of Python . This will help you to boost your knowledge about Python. "


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
                    <p >
                        1. <Link to="/CommingSoon" >To DOs</Link>
                        {/* 2. <Link href="javascript:AlertIt();">-------------</Link> */}

                    </p>
                </div>
            </section>
        </>
    )
}
