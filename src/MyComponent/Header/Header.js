import React, { useState } from 'react'
import "./Header.css"
import logo from "./logofinal.png"

import { Link } from "react-router-dom";
import { NavLink } from 'react-bootstrap';


export const Header = (header) => {

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
	// const scrolltop3 = navbar ? "scrolltotop" : "scrolltopnone"

	return (
		<section id="Header">


			<nav className={navstyle} id="nav" >
				<div className="noselect  container-fluid  ">

					<Link className="navbar-brand " to="/">

						<img className="App-logo-b" src={logo} alt="logo" />

					</Link>
					<button className=" navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<ul className="navbar-nav  menu-bg  horizontal-list nav-menu right">
							<li className="nav-item pad">
								<NavLink className="act navhover" aria-current="page" href="/#Header">Home</NavLink>
							</li>
							<li className="nav-item pad">
								<NavLink className="navhover" href="/#about">About</NavLink>
							</li>
							<li className="nav-item dropdown pad">
								<NavLink className="navhover dropdown-toggle" to="project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									All Project
								</NavLink>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to="/PythonProjects">Python</Link></li>
									<li><Link className="dropdown-item" to="/Datascience">Data Science</Link></li>
									<li><Link className="dropdown-item" to="/Cpp">CPP</Link></li>
									<li><Link className="dropdown-item" to="/Java">Java</Link></li>
									<li><Link className="dropdown-item" to="/Web_development">Web Development</Link></li>
									<li><Link className="dropdown-item" to="/Cybersecurity">Cyber Security</Link></li>
									<li><hr className="dropdown-divider" /></li>
									<li><Link className="dropdown-item" to="/Idea">Project Idea</Link></li>
								</ul>
							</li>
							<li className=" nav-item dropdown pad">
								<NavLink className="navhover dropdown-toggle" to="#project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Contribute
								</NavLink>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to="./Formsubmission">By Form</Link></li>
									<li><Link className="dropdown-item" to="./Bytemplate">By Template</Link></li>

								</ul>
							</li>

							<li className="nav-item pad">
								<NavLink className="navhover" aria-current="page" href="/#contact">Contact</NavLink>
							</li>
						</ul>

					</div>

				</div>

			</nav>
		</section>

	)
}

export const Scrolltop = () => {
	const [scrtop, setscrtop] = useState(false)

	const changebackground = () => {
		if (window.scrollY > 500) {
			setscrtop(true)
		}
		else {
			setscrtop(false)
		}

	}

	window.addEventListener("scroll", changebackground)

	const scrolltop = scrtop ? "scrolltotop" : "scrolltotop hide"

	return (


		<button className={scrolltop} style={{ border: "none", backgroundColor: "transparent" }} type="button" onClick={() => (window.scrollTo(0, 0))}> <i className="red fas fa-arrow-alt-circle-up fa-2x"></i></button>

	)
}
