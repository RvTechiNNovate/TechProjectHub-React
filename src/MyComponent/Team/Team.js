import React from 'react'
import "./Team.css"
// import img from "./rashmi.jpeg"
import img2 from "./mine.jpeg"



export const Team = () => {
    return (
        <>
            <main style={{ overflow: "hidden" }} >
                <span className="noselect  heading"> <h2>Our Team</h2></span>

                <div id="body1" data-aos="fade-left" className="color">

                    <div className="container1 ">


                        <div className="card">
                            <div className="content">
                                <div className="imgBox">
                                    <img className="imgcard" src={img2} alt="" />
                                </div>
                                <div className="Name">
                                    <h3>Ritesh Srivastva<br /> <span>Data Analyst</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="imgBox">
                                    <img className="imgcard" src={img2} alt="" />
                                </div>
                                <div className="Name">
                                    <h3>Ritesh Vishwakarma<br /> <span>Web Developer</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="imgBox">
                                    <img className="imgcard" src={img2} alt="" />
                                </div>
                                <div className="Name">
                                    <h3>Anurag Kumar<br /> <span>App Developer</span></h3>
                                </div>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
