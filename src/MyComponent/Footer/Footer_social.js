import React from 'react'
import "./Footer.css"


export const Footer_social = () => {

    return (
        <div >
            <section class="pad-bottom">
                <div class="social-icon-container ">
                    <ul class="pt-2 text-center horizontal-list bottom-border social-icon social-icon-container bg">
                        <li>
                            <a href="#">
                            <i class="fab fa-instagram instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i class="fab fa-twitter twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/RvTechiNNovate">
                            <i class="fab fa-github github"></i>  
                            </a>
                        </li>
                        <li>
                            <a href="#About">
                            <i class="fab fa-telegram telegram "></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i class="fab fa-facebook facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCUF5U2VMi3bdHocsJYxwaJQ">
                            <i class="fab fa-youtube youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>


            </section>
            <button
                type="button"
                class="btn btn-danger btn-floating btn-lg"
                id="btn-back-to-top">

                <i class="fas fa-arrow-up "></i>
            </button>
        </div>
    )
}
