import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./content/Home";
import About from "./content/About";
import Skills from "./content/Skills";
import Education from "./content/Education";
import Contact from "./content/Contact";
import Projects from "./content/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route for About.js contents */}
        <Route path="/about">
          <About />
        </Route>
        {/* Route for Education.js contents */}
        <Route path="/education">
          <Education />
        </Route>
        {/* Route for Skills.js contents */}
        <Route path="/skills">
          <Skills />
        </Route>
        {/* Route for Contact.js contents */}
        <Route path="/contact">
          <Contact />
        </Route>
        {/* Route for Contact.js contents */}
        <Route path="/projects">
          <Projects />
        </Route>
      </div>
    </Router>
  );
}
export default App;
