import React from 'react'
import "./Footer.css"
import Logofooter from "./p-footer.png"

export const Footer = () => {

    return (

        <footer className="footer">

            
            <div className="container color">
            <div className="footer-logo">
                <img className src={Logofooter} alt="asdf"/> 
                <h3>
                    TechProject
                </h3>


            </div>
                <div className="row">
                    <div className="footer-col">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">All project</a></li>
                            <li><a href="">contribute</a></li>
                            <li><a href="">Contact Us</a></li>

                            <li><a href="">Services</a></li>




                        </ul>

                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Paid assistance</a></li>

                            <li><a href="">text</a></li>
                            <li><a href="">text</a></li>
                            <li><a href="">text</a></li>

                        </ul>

                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">text</a></li>
                            <li><a href="">text</a></li>
                           
                        </ul>

                    </div>
                    
                    <div className="footer-col">
                        <h4>Social</h4>
                        <div className="footer-social-icon">
                            <a href="#">
                                <i class="fab fa-instagram fa-2x  instagram"></i>
                            </a>
                           
                            <a href="https://github.com/RvTechiNNovate">
                                <i class="fab fa-github fa-2x github "></i>
                            </a>
                            <a href="#About">
                                <i class="fab fa-linkedin fa-2x "></i>
                            </a>
                            
                            <a href="https://www.youtube.com/channel/UCUF5U2VMi3bdHocsJYxwaJQ">
                                <i class="fab fa-youtube fa-2x  youtube"></i>
                            </a>

                        </div>
                        
                         </div>

                </div>

            </div>

            <div className="copyright-footer ">
                <p>Copyright &copy; 2021 All right reserved </p>
            </div>
        </footer>
    )
}
