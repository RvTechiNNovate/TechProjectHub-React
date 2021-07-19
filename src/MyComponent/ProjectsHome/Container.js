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
// import img9 from "./Images/data_science.png"


export const Container = () => {
    return (

        <div id="project">
            <h1 className="section-heading mb75px">
                <span className="header-name-icon">
                    <i className="fas fa-tasks"></i>
                </span>
                <span>
                    Projects
                </span>
                {/* style="color: black */}

            </h1>


            <div className="project-container " >

                <div className="project-image-container project">

                    <img src={img1} />
                    <a href="./datascience.html">
                        <div className="project-detail">

                            {/* <p>
                                    "Data Science Project"
                                </p> */}
                        </div>
                    </a>

                </div>
                <div className="project-image-container">
                    <img src={img2} />
                    <a href="./java.html">
                        <div className="project-detail">
                            {/* <p>
                                        "Java Project"
                                    </p> */}
                        </div>
                    </a>

                </div>
                <div className="project-image-container">
                    <img className="" src={img3} />
                    <a href="./Python.html">
                        <div className="project-detail">
                            {/* <p>
                            "Python Project"

                        </p> */}
                        </div>
                    </a>
                </div>
                <div className="project-image-container">
                    <img src={img4} />
                    <a href="./web_development.html">
                        <div className="project-detail">
                            {/* <p>
                                "Web Development Project"
                            </p> */}
                        </div>
                    </a>
                </div>
                <div className="project-image-container">
                    <img src={img5} />
                    <a href="computer_vision.html">
                        <div className="project-detail">
                            {/* <p>
                                                    "Computer Vision Project"
                                                </p> */}
                        </div>
                    </a>
                </div>
                <div className="project-image-container">
                    <img src={img6} />
                    <a href="./cpp.html">
                        <div className="project-detail">
                            {/* <p>
                                "C++ Project"
                            </p> */}
                        </div>
                    </a>
                </div>
                <div className="project-image-container">
                    <img src={img7} />
                    <a href="./android.html">
                        <div className="project-detail">
                            {/* <p>
                                "Android<br/> Project "
                            </p> */}
                        </div>
                    </a>
                </div>

                <div className="project-image-container">
                    <img src={img8} />
                    <a href="./idea.html">
                        <div className="project-detail">
                            {/* <p>
                                "Project Idea"
                            </p> */}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
