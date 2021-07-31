import React from 'react'
import "./Footer.css"


export const Footer_social = () => {

    return (
        <div >
            <section className="pad-bottom">
                <div className="social-icon-container ">
                    <ul className="pt-2 text-center horizontal-list bottom-border social-icon social-icon-container bg">
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/RvTechiNNovate">
                                <i className="fab fa-github github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#About">
                                <i className="fab fa-telegram telegram "></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCUF5U2VMi3bdHocsJYxwaJQ">
                                <i className="fab fa-youtube youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>


            </section>
           
        </div>
    )
}
