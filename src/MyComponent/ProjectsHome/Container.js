import React from 'react'
import "./Container.css"
import img1 from "./Images/data_science.png"
import img2 from "./Images/java.png"
import img3 from "./Images/python_project.jpeg"
import img4 from "./Images/web-dev_project.png"
import img5 from "./Images/computer_vision.png"
import img6 from "./Images/cpp.png"
import img7 from "./Images/android.png"
import img8 from "./Images/idea.png"
import { Link } from 'react-router-dom'
import "aos/dist/aos.css"



export const Container = () => {
    return (
        <section id="project">
            
        
        <div data-aos="fade-up" id="project" >
            <h1 className="section-heading mb75px">
                <span className="header-name-icon">
                    <i className="fas fa-tasks"></i>
                </span>
                <span className="heading noselect "> <h2>Projects</h2></span>


            </h1>


            <div className="project-container " >

                <div className="project-image-container project">

                    <img alt="" src={img1} />
                    <Link to="./CommingSoon">
                        <div className="project-detail">

                            {/* <p>
                                    "Data Science Project"
                                </p> */}
                        </div>
                    </Link>

                </div>
                <div className="project-image-container">
                    <img alt=""  src={img2} />
                    <Link to="/CommingSoon">
                        <div className="project-detail">
                            {/* <p>
                                        "Java Project"
                                    </p> */}
                        </div>
                    </Link>

                </div>
                <div className="project-image-container">
                    <img alt=""  className="" src={img3} />
                    <Link to="/PythonProjects">
                        <div className="project-detail">
                            {/* <p>
                            "Python Project"

                        </p> */}
                        </div>
                    </Link>
                </div>
                <div className="project-image-container">
                    <img alt="" src={img4} />
                    <Link to="./Webdev/#webdev">
                        <div className="project-detail">
                            {/* <p>
                                "Web Development Project"
                            </p> */}
                        </div>
                    </Link>
                </div>
                <div className="project-image-container">
                    <img  alt=""  src={img5} />
                    <Link to="/CommingSoon">
                        <div className="project-detail">
                            {/* <p>
                                                    "Computer Vision Project"
                                                </p> */}
                        </div>
                    </Link>
                </div>
                <div className="project-image-container">
                    <img alt="" src={img6} />
                    <Link to="/CommingSoon">
                        <div className="project-detail">
                            {/* <p>
                                "C++ Project"
                            </p> */}
                        </div>
                    </Link>
                </div>
                <div className="project-image-container">
                    <img alt=""  src={img7} />
                    <Link to="/CommingSoon">
                        <div className="project-detail">
                            {/* <p>
                                "Android<br/> Project "
                            </p> */}
                        </div>
                    </Link>
                </div>

                <div className="project-image-container">
                    <img alt=""  src={img8} />
                    <Link to="/CommingSoon">
                        <div className="project-detail">
                            {/* <p>
                                "Project Idea"
                            </p> */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </section>
    )
}
