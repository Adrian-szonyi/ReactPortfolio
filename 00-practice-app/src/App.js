
import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";





function App() {
  return (
    <div className="App">
   
      <Header />
      <Navbar />
      <Route exact path="/about">
                <About />
              </Route>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
    </div>


  );
}

export default App;
