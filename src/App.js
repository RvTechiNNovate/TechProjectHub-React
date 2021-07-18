import logo from './logo.svg';
// import './App.css';
import { Header } from "./MyComponent/Header/Header"
import { Footer } from "./MyComponent/Footer/Footer";


import {Welcome} from "./MyComponent/Welcome/Welcome";





function App() {

  return (
    <div className="App">

      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
