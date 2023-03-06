import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  const [search, setSearch] = useState("");
  const [dispSearch, setDispSearch] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSearch = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <div className="app">
      <Router>
        <Header
          search={search}
          handleChange={handleChange}
          handleSearch={handleSearch}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                search={search}
                dispSearch={dispSearch}
                setDispSearch={setDispSearch}
              />
            }
          ></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h2>404 Error Page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
