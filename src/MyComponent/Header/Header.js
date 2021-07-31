import React, { useState } from 'react'
import "./Header.css"
import logo from "./logofinal.png"
// import Scroll from "react-scroll"


import {

	NavLink,
} from "react-router-dom";







export const Header = () => {

	const [navbar, setnavbar] = useState(false)

	const changebackground = () => {
		if (window.scrollY > 100) {
			setnavbar(true)
		}
		else {
			setnavbar(false)
		}

	}

	window.addEventListener("scroll", changebackground)

	const navstyle = navbar ? "menu-bg navbar activenav  navbar-expand-lg fixed-top text-center" : " navbar navbar-expand-lg fixed-top text-center"
	// console.log(navstyle)
	return (
		<>


			<nav className={navstyle} id="nav" >
				<div className="noselect  container-fluid  ">

					<NavLink className="navbar-brand " to="/Home/#welcome">

						<img className="App-logo-b" src={logo} alt="logo" />

					</NavLink>
					<button className=" navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<ul className="navbar-nav  menu-bg  horizontal-list nav-menu right">
							<li className="nav-item pad">
								<NavLink activeclass="active" className="navhover" aria-current="page" to="/">Home</NavLink>
							</li>
							<li className="nav-item pad">
								<NavLink className="navhover" to="about">About</NavLink>
							</li>
							<li className="nav-item dropdown pad">
								<NavLink className="navhover dropdown-toggle" to="project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									All Project
								</NavLink>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><NavLink className="dropdown-item" to="/PythonProjects">Python</NavLink></li>
									<li><NavLink className="dropdown-item" to="/Datascience">Data Science</NavLink></li>
									<li><NavLink className="dropdown-item" to="/Cpp">CPP</NavLink></li>
									<li><NavLink className="dropdown-item" to="/Java">Java</NavLink></li>
									<li><NavLink className="dropdown-item" to="/Web_development">Web Development</NavLink></li>
									<li><NavLink className="dropdown-item" to="/Cybersecurity">Cyber Security</NavLink></li>
									<li><hr className="dropdown-divider" /></li>
									<li><NavLink className="dropdown-item" to="/Idea">Project Idea</NavLink></li>
								</ul>
							</li>
							<li className=" nav-item dropdown pad">
								<NavLink className="navhover dropdown-toggle" to="#project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Contribute
								</NavLink>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><NavLink className="dropdown-item" to="./Formsubmission">By Form</NavLink></li>
									<li><NavLink className="dropdown-item" to="./Bytemplate">By Template</NavLink></li>

								</ul>
							</li>

							<li className="nav-item pad">
								<NavLink className="navhover" to="contact">Contact Us</NavLink>
							</li>
						</ul>

					</div>

				</div>

			</nav>
		</>

	)
}
