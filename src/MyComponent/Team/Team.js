import React from 'react'
import "./Team.css"
import img from "./rashmi.jpeg"
import img2 from "./mine.jpeg"


export const Team = () => {
    return (
        <main>
             <span className="heading"> <h2>Our Team</h2></span>
       
        <body1 className="color">
           
                <div className="container1 ">
                    
                        
                    <div className="card">
                        <div className="content">
                            <div className="imgBox">
                                <img className="imgcard" src={img} alt="" />
                            </div>
                            <div className="Name">
                                <h3>Ritesh Srivastva<br /> <span>Data Analyst</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
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
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="imgBox">
                                <img className="imgcard" src={img} alt="" />
                            </div>
                            <div className="Name">
                                <h3>Anurag Kumar<br /> <span>App Developer</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            
        </body1>
</main>
    )
}
