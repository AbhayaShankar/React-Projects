import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/movie/:id" element={<MovieDetail />}></Route>
          <Route index path="/movies/:type" element={<MovieList />}></Route>
          <Route index path="/*" element={<h2>404 Error Page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
