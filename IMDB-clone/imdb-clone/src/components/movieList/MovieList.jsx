import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1`
    );
    const data = await res.json();
    const result = data.results;
    console.log(result);
    setMovieList(result);
  };

  return (
    <div className="movie__list">
      <h2 className="movieList__title">
        {(type ? type : "Popular").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
