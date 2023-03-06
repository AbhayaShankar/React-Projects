import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { yellow } from "@mui/material/colors";

const MovieDetail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data);
    setDetail(data);
  };

  return (
    <div className="movie__container">
      <div className="movie__top">
        <div className="movie__banner__container">
          <img
            className="movie__banner"
            src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
            alt="banner"
          />
        </div>
        <div className="movie__details__">
          <div className="movie__detail">
            <div>
              <h1 className="movie__name">{detail.original_title}</h1>
            </div>
            <div className="movie__rating">
              <p>
                ⭐ {detail.vote_average} | {detail.vote_count}
              </p>
            </div>
          </div>
          <div className="movie__overview">{detail.overview}</div>
          <div className="movie__runtime">Runtime : {detail.runtime} Mins</div>
          <div className="movie__production">
            {detail && detail.production_companies ? (
              <span className="production__company">
                Production House : {detail.production_companies[0].name}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="movie__genres">
            {detail && detail.genres
              ? detail.genres.map((genre) => (
                  <>
                    <span id={genre.id} className="movie__genre">
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="movie__poster">
        <img
          src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie__links">
        <div className="movie__link">
          <a href={`https://www.imdb.com/title/${detail.imdb_id}`}>
            {" "}
            IMDB
            <OpenInNewRoundedIcon style={{ color: "#fdc501" }} />
          </a>
        </div>
        <div className="movie__link">
          <a href={detail.homepage}>
            {" "}
            HOME
            <OpenInNewRoundedIcon style={{ color: "#fdc501" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
