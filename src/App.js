
import { Header } from "./MyComponent/Header/Header"
import { Footer } from "./MyComponent/Footer/Footer";
import { Footer_social } from "./MyComponent/Footer/Footer_social";
import { Welcome } from "./MyComponent/Welcome/Welcome";
import { Container } from "./MyComponent/ProjectsHome/Container"
import { About } from "./MyComponent/About/About"
import { PythonProjects } from "./MyComponent/Projects/PythonProjects"
import { CommingSoon } from "./MyComponent/Projects/CommingSoon"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">

        <Header />
        <Welcome />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Container />
                <About />

              </>)
          }}>

          </Route>



          <Route exact path="/About">
              
                <About />
                <Container />


          </Route>
          <Route exact path="/Projects">
            <Container />
          </Route>
          <Route exact path="/PythonProjects">
          <PythonProjects/>
          </Route>
          <Route exact path="/CommingSoon">
          <CommingSoon/>
          </Route>



        </Switch>
          <Footer_social />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
