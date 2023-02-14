import React, { useState } from "react";
import "./App.css";

// importing pages for the App
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

// importing Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h3>Abhaya</h3>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
