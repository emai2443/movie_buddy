import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
// import { ResultCard } from "./ResultCard";
import { number } from "./Home";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

var API = ``;

export const ViewMore = () => {
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&vote_average.gte=7&vote_average.lte=10`;
  const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&vote_average.gte=4`;
  const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    getMovies(API + `&page=${value}`);
    window.scroll(0, 0);
  };

  function setAPI() {
    if (number === 1) {
      API = FEATURED_API;
    } else if (number === 2) {
      API = NOW_PLAYING_API;
    } else if (number === 3) {
      API = TOP_RATED_API;
    }
  }
  function setTitle() {
    if (number === 1) {
      return "Popular";
    } else if (number === 2) {
      return "Now Playing";
    } else if (number === 3) {
      return "Top Rated";
    }
  }

  useEffect(() => {
    setAPI();
    setTitle();
    getMovies(API);
  }, []);

  const getMovies = (ape) => {
    fetch(ape)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  return (
    <>
      <h1 className="homeTitle">{setTitle()}</h1>
      <div className="pages">
        <div className="pagesNumber">
          <Pagination
            count={20}
            defaultPage={1}
            color="primary"
            size="large"
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};
