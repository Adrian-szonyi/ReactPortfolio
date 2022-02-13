
import './App.css';
import React from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";






function App() {
  return (
    <div>
   <Router>
      <Header />
      <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/">
      <About />
      </Route>
      <Route exact path="/contact">
      <Contact />
      </Route>
      <Footer />
      </Router>
      
    </div>


  );
}

export default App;
