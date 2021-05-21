import React from "react";
// import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  return (
   <Router>
   <div className="App">
        <Nav />
          <Route exact path="/">
              <Home />
          </Route>

          <Route exact path="/about"> 
                <About />
          </Route>

          <Route exact path="/portfolio">
               <Portfolio />
          </Route>

          <Route exact path="/contact">
               <Contact />
          </Route>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
