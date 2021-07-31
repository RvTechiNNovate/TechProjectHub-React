import { Header } from "./MyComponent/Header/Header"
import { Footer } from "./MyComponent/Footer/Footer";
import { Container } from "./MyComponent/ProjectsHome/Container"
import { About } from "./MyComponent/About/About"
import { PythonProjects } from "./MyComponent/ProjectsHome/PythonProjects"
import { CommingSoon } from "./MyComponent/ProjectsHome/CommingSoon"
import { Contact } from "./MyComponent/Contact/Contact"
import { Team } from "./MyComponent/Team/Team";
import { WebDev } from "./MyComponent/ProjectsHome/Webdev"
import { Hero } from "./MyComponent/Hero/Hero";
import { Pagenotfound } from "./MyComponent/Welcome/Pagenotfound";
import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Aos from "aos"


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }
    , [])

  return (

    <div className="">

      <Header />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <Hero />
              <Container />
              <About />
              <Team />
              <Contact />
            </>)
        }}>
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/Projects">
          <Container />
        </Route>

        <Route exact path="/PythonProjects">
          <PythonProjects />
        </Route>

        <Route exact path="/Webdev">
          <WebDev />
        </Route>

        <Route exact path="/CommingSoon">
          <CommingSoon />
        </Route>

        <Route path="*" >
          <Pagenotfound />
        </Route>

      </Switch>

      <Footer />
    </div>

  );
}


export default App;
