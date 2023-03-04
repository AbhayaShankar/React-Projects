import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route
            index
            path="/movie/:id"
            element={<h2>Movie Detail Page</h2>}
          ></Route>
          <Route
            index
            path="/movies/:type"
            element={<h2>Movie List Page</h2>}
          ></Route>
          <Route index path="/*" element={<h2>404 Error Page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
