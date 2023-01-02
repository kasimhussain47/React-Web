// import React from "react";
import React from "react-router-dom";
import "./App.css";
import Card from "./Card";
import Navbar from "./Home";
import About from "./About";
import Listing from "./Listing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Router>
         <Nav/>
      <Routes>
       
          <Route path="/" element={<Navbar /> } />
          <Route path="/About" element={<About />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Card" element={<Card />} />
         
       
      </Routes>
    </Router>
        </>
  );
}

export default App;
