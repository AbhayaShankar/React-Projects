import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Icon } from "@mui/material";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1"
      );
      const data = await res.json();
      const result = data.results;
      console.log(result);
      setPopularMovies(result);
    };

    getMovies();
  }, []);

  return (
    <div>
      <div className="carousel-slider">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          transitionTime={3}
          showStatus={false}
          stopOnHover={true}
          carouselStartIndex={0}
        >
          {popularMovies.map((movie) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div key={movie.id} className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt="movie-poster"
                  />
                </div>
                <div className="poster__overlay">
                  <div className="poster__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="poster__release">
                    {movie ? movie.release_date : ""}
                    <span className="poster__rating">
                      {" "}
                      {movie.vote_average}
                      <StarIcon
                        sx={{
                          color: "#ffc600",
                          fontSize: "32px",
                          paddingTop: "6px",
                          marginLeft: "6px",
                        }}
                      />
                    </span>
                  </div>
                  <div className="poster__desc">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;