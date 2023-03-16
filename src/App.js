import React from "react";
import Home from './Home/Home'
import About from './About/About'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Header from "./Header/Header";
 
import Meals from './Meals/Meals'
import Healthy from "./Healthy/Healthy";
import Desserts from "./Desserts/Desserts";
import Drinks from "./Drinks/Drinks";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element= {<Home />} />
        <Route exact path="/About" element= {<About />} />
        <Route exact path="/Menu" element= {<Menu />} />
        <Route exact path="/Contact" element= {<Contact />} />


        <Route exact path="/Menu/Meals" element= {<Meals />} />
        <Route exact path="/Menu/Healthy" element= {<Healthy />} />
        <Route exact path="/Menu/Desserts" element= {<Desserts />} />
        <Route exact path="/Menu/Drinks" element= {<Drinks />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
