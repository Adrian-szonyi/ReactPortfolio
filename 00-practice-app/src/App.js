
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from './PortfolioContainer';
import Navbar from "./components/Navbar";





function App() {
  return (
    <div className="App">
   
      <Header />
      <Navbar />
      <PortfolioContainer />
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
