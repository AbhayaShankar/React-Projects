import React, { useEffect, useState } from "react";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";

function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/movie/${movie.id}`}
        >
          <div key={movie.id} className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }`}
              alt="movie-poster"
            />
          </div>
          <div className="cards__overlay">
            <div className="cards__title">
              {movie ? movie.original_title : ""}
            </div>
            <div className="cards__desc">
              {movie ? movie.overview.slice(0, 100) + "..." : ""}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Card;
