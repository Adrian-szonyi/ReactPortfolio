
import './App.css';
import React from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import Header from "./components/Header";
import { BrowserRouter as Route } from "react-router-dom";





function App() {
  return (
    <div>
   
      <Header />
      <About />
      <Footer />
      
    </div>


  );
}

export default App;
