import React from 'react'
import Contact_img from "./Contact_img.png"
import "./Contact.css"

export const Contact = () => {
    return (
        <section className="container Section" id="contact">

            <div className="left-div">


                <h3>
                    Get in Touch
                </h3>
                <p>
                    Do you have any questions? Please do not hesitate to contact us directly.
                    Our team will come back to you within a matter of hours to help you.
                </p>
                <div className="pad">
                    <form>
                        {/* name and email */}
                        <div className="row">
                            <div className="width50">


                                <label >Name</label>
                                <input type="text" name="name" placeholder="Enter Name*" />
                            </div>
                            <div className="width50">


                                <label className="">Email</label>
                                <input type="text" name="name" placeholder="Email*" />
                            </div>
                        </div>
                        {/* subject */}
                        <div className="row width100">


                            <label className="">Subject</label>
                            <input type="text" name="name" placeholder="Subject.." />
                        </div>
                        <div className="row width100">


                            <label className="">Message</label>
                            <input type="text" name="name" placeholder="Message.." />
                        </div>
                        <button className="btn btn-primary " type="submit">Send Message</button>
                    </form>


                </div>
            </div>


            <div className="right-div">
                <div>
                    <img className="moveArrow" src={Contact_img} alt="contact_img" />
                </div>

                <div>
                    <p>
                        <i className="fas fa-map-marker-alt fa-sm" aria-hidden="true"></i> 
                         Greater Noida , UP, India
                    </p>
                    <p>
                        <i className="fas fa-phone  fa-sm" aria-hidden="true"></i>
                        <a href="tel :9651033216">+91 96510 33216</a>
                    </p>
                    <p>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:vritesh065@gmail.com">vritesh065@gmail.com</a>
                    </p>
                </div>



            </div>
        </section>


    )
}
