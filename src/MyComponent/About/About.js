import React from 'react'
import "./About.css"
// import ".src/App.css"

export const About = () => {
    return (
        <div className="bg-color" id="about">
            
            <section className="" id="about">
                <h1 className="section-heading mb75px ">
                    <span className="header-name-icon ">
                        <i className="far fa-address-card " aria-hidden="true"></i>
                    </span>
                    <span className="black">
                        About
                    </span>

                </h1>
                <div id="about-para">
                    <p>
                        “ A website for those who are in computer science Field. it contain Well written and Tested project with explaination video. A paltform where you will get any type of project like python, java, c++, Data science, Machine learning, Deep learning, Web development and idea about project.
                        From that u can take help for any project."  <br />
                        If you want to contribute on any project there is <a href="https://github.com/RvTechiNNovate/ProjectTech.github.io">link</a> of github update on that and push to our repository this will help us lot.
                    </p><p className="thank">Thanks</p>
                </div>




            </section>
        </div>
    )
}
// style="color: black"

// style="text-align:right;"