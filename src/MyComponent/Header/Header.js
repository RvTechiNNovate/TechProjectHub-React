import React from 'react'
import "./Header.css"
import logo from "./logofinal.png"



import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";


export const Header = () => {

	return (
		<>
			<nav className="menu-bg navbar navbar-expand-lg navbar-light fixed-top bg-light fixedheight text-center pt-0 pb-0">
				<div className="container-fluid menu-bg ">

					<Link className="navbar-brand App-Logo" to="/">
						<img className="App-logo-b" src={logo} alt="" />

					</Link>
					<button className=" navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<ul className="navbar-nav  menu-bg  horizontal-list nav-menu right">
							<li className="nav-item pad">
								<Link className="navhover" aria-current="page" to="/">Home</Link>
							</li>
							<li className="nav-item pad">
								<Link className="navhover" to="/About">About</Link>
							</li>
							<li className="nav-item dropdown pad">
								<Link className="navhover dropdown-toggle" to="#project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									All Project
								</Link>
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
								<Link className="navhover dropdown-toggle" to="#project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Contribute
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><Link className="dropdown-item" to="./Formsubmission">By Form</Link></li>
									<li><Link className="dropdown-item" to="./Bytemplate">By Template</Link></li>

								</ul>
							</li>

							<li className="nav-item pad">
								<Link className="navhover" to="index#contact"  >Contact Us</Link>
							</li>
						</ul>

					</div>
					
				</div>

			</nav>
		</>

	)
}
